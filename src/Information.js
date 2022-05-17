import { Component } from 'react';
import logo from './images/appLogo.png';
import style from "./Information.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { Text,View, StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Navbar, Nav, Form,NavDropdown,Container, ModalTitle } from 'react-bootstrap';


const Information =({navigation})=>{
  return(
    <View>
    <div className = {style.topHeader}>
    <LogoImageInformation/>
    <BackMainInformation nav={navigation}/>
    </div>
    <div>
      <ModalTitle style={{fontFamily:'Roboto',color:'#ff6600',marginTop:'5%'}}> Nosotros, tu web </ModalTitle>
      <Text style={{fontFamily: 'Open Sans',textAlign:'center'}}>
      Somos una start-up con una idea de cambiar el mercado online, 
      donde no hay letra pequeña, se te ofrece un catálogo amplio con gran
      <br/>
      diversidad de productos especializados en todos los deportes, comparador 
      de precio y de calidad de compra (tiempo de envío, métodos de pago).</Text>
    </div>
    </View>
  );
}
const BackMainInformation = (props) =>(
    <Form.Text className={style.backMain} 
    onClick={() => {
      props.nav.navigate('MainPage')
     }}> 
    Inicio
    </Form.Text>
);

const LogoImageInformation = () =>(
  <img src={logo} 
  className= {style.topHeaderImage} 
  alt = "Logo"/>
);

export default Information;