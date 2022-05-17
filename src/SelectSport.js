import { Component } from "react";
import logo from "./images/appLogo.png";
import basketImage from "./images/basketball_jump.jpeg"
import soccerImage from "./images/soccer_image.jpeg"
import runningImage from "./images/running.jpeg"
import cyclingImage from "./images/cyclyng.jpeg"
import swimmingImage from "./images/swimming.jpeg"
import shoppingCart from "./images/shoppingCart.jpg";
/*<img src={shoppingCart} alt="add item" width="30" background-color="white"/> */
import style from "./SelectSport.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Button, Card } from "react-bootstrap";
import { Text, View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Navbar, Nav, Form, NavDropdown, Container } from "react-bootstrap";
import Information from "./Information";
import Image from 'react-bootstrap/Image'

const SelectSport = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <div className={style.topHeader}>
        <NeedHelp />
      </div>
      <LogoImage />
      <div className={style.sportsImagesGrid}>
        <SoccerImage nav={navigation}/>
        <RunningImage />
        <SwimmingImage />
        <BasketBallImage />
        <CyclingImage />
      </div>
    </View>
  );
};

const LogoImage = () => (
  <Image src={logo} className={style.topHeaderImage} alt="Logo" />
);
const SoccerImage = (props) => (
  <div style={{marginLeft:'2%',width:'30%',height:'auto',
  backgroundColor:'white',borderColor:'white',position:'relative'}}>
    <Button variant="light" className = {style.buttonsImage}
     onClick={() => {
      props.nav.navigate("Soccer");
    }}>Fútbol</Button>
    <Image src={soccerImage} style={{width:'100%',height:'auto'}} alt="Soccer"/>
  </div>
);

const RunningImage = () => (
  <div style={{marginLeft:'2%',width:'30%',height:'auto',
  backgroundColor:'white',borderColor:'white',position:'relative'}}>
    <Button variant="light" className = {style.buttonsImage}>Running</Button>
    <Image src={runningImage} style={{width:'100%',height:'100%'}} alt="Running" />
  </div>
);


const SwimmingImage = () => (
  <div style={{marginLeft:'2%',width:'30%',height:'auto',
  backgroundColor:'white',borderColor:'white',position:'relative'}}>
    <Button variant="light" className = {style.buttonsImage}>Natación</Button>
    <Image src={swimmingImage} style={{width:'100%',height:'100%'}} alt="Swimming"/>
  </div>
);

const BasketBallImage = () => (
  <div style={{marginLeft:'20%',width:'30%',height:'auto',
  backgroundColor:'white',borderColor:'white',position:'relative',marginTop:'2%'}}>
    <Button variant="light" className = {style.buttonsImage}>Baloncesto</Button>
    <Image src={basketImage}  style={{width:'100%',height:'auto'}} alt="BasketBall" />
  </div>
);
const CyclingImage = () => (
  <div style={{marginLeft:'2%',width:'30%',height:'auto',
  backgroundColor:'white',borderColor:'white',position:'relative',marginTop:'2%'}}>
    <Button variant="light" className = {style.buttonsImage}>Ciclismo</Button>
    <Image src={cyclingImage}  style={{width:'100%',height:'auto'}} alt="Cycling" />
  </div>
);


const NeedHelp = (props) => (
  <Form.Text
    className={style.needHelpText}
    onClick={() => {
      props.nav.navigate("Information");
    }}
  >
    ¿Necesitas ayuda?
  </Form.Text>
);
export default SelectSport;
