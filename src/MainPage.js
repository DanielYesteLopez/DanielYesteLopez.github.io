import { Component } from 'react';
import logo from './images/appLogo.png';
import mainImage from './images/main_image.jpeg'
import style from "./MainPage.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { Button,Card } from 'react-bootstrap';
import { Text,View, StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Navbar, Nav, Form,NavDropdown,Container } from 'react-bootstrap';
import Information from './Information';



const MainPage =({navigation})=>{
  return(
    <View style={{ flex: 1}}>
    <div className = {style.mainPage}>
      <div className = {style.helpMessagesDiv}>
        <WhoAreWe nav={navigation}/>
        <ServicesText nav={navigation}/>
      </div>
    <LogoImage/>
    <MainImage/>
    <div className={style.findYourProduct}>
      <Card style={{ width: '20%',height:'auto' ,left:'9%'}}>
    <Card.Title style={{fontFamily:'Roboto'}}>Encuentra tu producto</Card.Title>
    <Card.Body>
    <Card.Text style={{fontFamily: 'Open Sans'}}>
      ¡Empezemos!
    </Card.Text>
    <Button variant="primary" 
      onClick={() => {
      navigation.navigate('SelectSport')
     }} style={{ borderColor: '#ffaf7a',backgroundColor:'#ff6600'}} > Selecciona tu deporte</Button>
  </Card.Body>
      </Card>
      </div>
    </div>
    </View>
  );
}

/*style={{ flex: 0}}*/

/*Component that contains our main logo for the page*/
const LogoImage = () =>(
      <img src={logo} 
      className= {style.headerPanelImage} 
      alt = "Logo"/>
      );

const WhoAreWe = (props) =>(
    <Form.Text className={style.whoAreWeText} 
    onClick={() => {
      props.nav.navigate('Information')
     }}> 
    ¿Quiénes somos?
    </Form.Text>
);

const ServicesText = (props) =>(
  <Form.Text className = {style.servicesText}
  onClick={() => {
    props.nav.navigate('Services')
   }}>Servicios</Form.Text>
)

const MainImage = () =>(
  <img src={mainImage} 
  className= {style.headerPanelMainImage} 
  alt = "MainImage"/>
  );

export default MainPage;
