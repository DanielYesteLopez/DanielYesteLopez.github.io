import { Component } from 'react';
import logo from './images/appLogo.png';
import style from "./Services.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { Text,View, StyleSheet,Label } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Navbar, Nav, Form,NavDropdown,Container, ModalTitle } from 'react-bootstrap';



const Services =({navigation})=>{
  return(
    <View>
    <div className = {style.topHeader}>
    <LogoImageServices/>
    <BackMainServices nav={navigation}/>
    </div>
    <div>
      <ModalTitle style={{fontFamily:'Roboto',color:'#ff6600',marginTop:'5%'}}> Servicios </ModalTitle>
      <Text style={{fontFamily: 'Open Sans',textAlign:'center'}}>
      - Atención al cliente de 8-22h.
      <br/>
      - Devoluciones en caso de compra insatisfecha.
      <br/>
      - Podemos pedir un producto específico a una empresa.
      <br/>
      - Seguimiento del pedido.
      <br/>
      - Comparador de precios.
      <br/>
      - Mostrar productos más relevantes.
      <br/>
      - Facilitar el proceso de compra.</Text>
    </div>
    </View>
  );
}
const BackMainServices = (props) =>(
    <Form.Text className={style.backMain} 
    onClick={() => {
      props.nav.navigate('MainPage')
     }}> 
    Inicio
    </Form.Text>
);



const LogoImageServices = () =>(
        <img src={logo} 
        className= {style.topHeaderImage} 
        alt = "Logo"/>
);

export default Services;