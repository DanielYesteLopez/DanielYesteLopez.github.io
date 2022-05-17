import { Component } from 'react';
import logo from './images/appLogo.png';
import paypalLogo from './images/paypal-brands.svg'
/*<img src={shoppingBuy} alt="add item" width="30" background-color="white"/> */
import style from "./BuyPage.module.css";
import item from './images/questionMark.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { Button,Card,ButtonGroup} from 'react-bootstrap';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import { Text,View, StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Navbar, Nav, Form,NavDropdown,Container } from 'react-bootstrap';
import Information from './Information';
import ListGroup from 'react-bootstrap/ListGroup'
import Tab from 'react-bootstrap/Tab'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
    faPaypal,
    faCcVisa
  } from '@fortawesome/free-brands-svg-icons';

const BuyPage =({navigation})=>{
    return(
      <View style={{ flex: 1}}>
      <div className = {style.topHeader}>
          <LogoImageBuy/>
        <BackMainBuy nav={navigation}/>
        <OtherSportBuy nav={navigation} />
      </div>
        <Form.Label style={{marginRight:'85%'}}>Tus artículos:</Form.Label>
        <Row style={{display:'flex-inline'}}>
            <img src={item} 
            className= {style.itemFromCart} 
        alt = "Item"/>
        <Form.Text style={{marginRight:'20%'}}>Botas Nike </Form.Text>
        </Row>
        <Form.Text style={{marginRight:'40%',marginTop:'2%'}}>El precio final de tu compra es: .... . Por favor,
            rellena los datos y haz click en pagar para finalizar tu compra.
        </Form.Text>
        <div className={style.buyOptions}>
            <InputInformation/>
        </div>
        <Button style={{fontFamily:'Roboto',width:'10%',marginLeft:'40%',marginTop:'3%', borderColor: '#ffaf7a',backgroundColor:'#ff6600'}} 
        >Pagar</Button>
      </View>
    );
  }

const BackMainBuy = (props) =>(
    <Form.Text className={style.backMain} 
    onClick={() => {
      props.nav.navigate('MainPage')
     }}> 
    Inicio
    </Form.Text>
);

const OtherSportBuy = (props) =>(
    <Form.Text className={style.backsport} 
    onClick={() => {
      props.nav.navigate('SelectSport')
     }}> 
    Selecciona otro deporte
    </Form.Text>
    );

const LogoImageBuy = () =>(
        <img src={logo} 
        className= {style.topHeaderImage} 
        alt = "Logo"/>
);

const InputInformation = () =>(
    <Form.Group style={{width:'95%'}}>
    <Row>
        <Form.Label column = "sm" lg={2}>Metódo de pago</Form.Label>
        <Col sm={1}>
            <Button size = "lm" style={{marginLeft:'2%',width:'50%',borderColor: '#ffaf7a',backgroundColor:'#ff6600'}}>
            <FontAwesomeIcon icon={faCcVisa} />
            </Button>
            <Button size = "lm" style={{marginLeft:'2%',width:'40%',borderColor: '#ffaf7a',backgroundColor:'#ff6600'}}>
            <FontAwesomeIcon icon={faPaypal} />
            </Button>
        </Col>
    </Row>
    <Row style={{marginTop:'2%'}}>
        <Form.Label column = "sm" lg={2}>Dirección de envio</Form.Label>
        <Col>
            <Form.Control size = "sm" style={{width:'20%'}}type="Dirección" placeholder="Dirección..." />
        </Col>
    </Row>
    <Row style={{marginTop:'2%'}}>
        <Form.Label column = "sm" lg={2}>Puerta</Form.Label>
        <Col>
            <Form.Control size = "sm" style={{width:'20%'}}type="Puerta" placeholder="Puerta.." />
        </Col>
    </Row>
    <Row style={{marginTop:'2%'}}>
        <Form.Label column = "sm" lg={2}>Población</Form.Label>
        <Col>
            <Form.Control size = "sm" style={{width:'20%'}}type="Población" placeholder="Población..." />
        </Col>
    </Row>
    <Row style={{marginTop:'2%'}}>
        <Form.Label column = "sm" lg={2}>Código postal</Form.Label>
        <Col>
            <Form.Control size = "sm" style={{width:'20%'}}type="Código postal" placeholder="Código postal..." />
        </Col>
    </Row>
    <Row style={{marginTop:'2%'}}>
        <Form.Label column = "sm" lg={2}>Nombre</Form.Label>
        <Col>
            <Form.Control size = "sm" style={{width:'20%'}}type="Dirección" placeholder="Introduzca su nombre" />
        </Col>
    </Row>
    <Row style={{marginTop:'2%'}}>
        <Form.Label column = "sm" lg={2}>Apellidos</Form.Label>
        <Col>
            <Form.Control size = "sm" style={{width:'20%'}}type="Dirección" placeholder="Introduzca sus apellidos" />
        </Col>
    </Row>
    <Row style={{marginTop:'2%'}}>
        <Form.Label column = "sm" lg={2}>Horario de entrega</Form.Label>
    </Row>
    </Form.Group>
)





export default BuyPage;