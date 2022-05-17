import { Component } from 'react';
import logo from './images/appLogo.png';
import boots from './images/botas.jpg'
import item from './images/questionMark.png'
/*<img src={shoppingCart} alt="add item" width="30" background-color="white"/> */
import style from "./ShoppingCart.module.css";
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

const ShoppingCart =({navigation})=>{
    return(
      <View style={{ flex: 1}}>
      <div className = {style.topHeader}>
          <LogoImageCart/>
        <BackMainCart nav={navigation}/>
        <OtherSportCart nav={navigation} />
        <ShoppingCartAccessCart nav={navigation}/>
      </div>
      <div >
          <CompanyBuySelection/>
          <ItemFromCart/>
          <ItemCharacteristics/>
      </div>
        <BuyButton nav={navigation}/>
      </View>
    );
  }

const BackMainCart = (props) =>(
    <Form.Text className={style.backMain} 
    onClick={() => {
      props.nav.navigate('MainPage')
     }}> 
    Inicio
    </Form.Text>
);

const OtherSportCart = (props) =>(
    <Form.Text className={style.backsport} 
    onClick={() => {
      props.nav.navigate('SelectSport')
     }}> 
    Selecciona otro deporte
    </Form.Text>
    );

const LogoImageCart = () =>(
        <img src={logo} 
        className= {style.topHeaderImage} 
        alt = "Logo"/>
        );
const ShoppingCartAccessCart = (props) =>(
    <Form.Text className={style.shoppingCart}
    onClick={() => {
        props.nav.navigate('ShoppingCart')
        }}> 
    Tu compra
    </Form.Text>
);

const CompanyBuySelection =()=>(
<ButtonGroup vertical className = {style.buyButtons}>
  <Form.Text style={{marginBottom:'5%'}}>Selecciona tu opción de compra</Form.Text>
  <Button  variant="light" > El Corte Inglés </Button>
  <Button  variant="light">Decathlon </Button>
  <Button  variant="light">Nike</Button>
  <Button  variant="light" >Adidas </Button>

</ButtonGroup>
);

const ItemFromCart = () =>(
    <img src={item} 
    className= {style.itemFromCart} 
    alt = "Item"/>
    );
const ItemCharacteristics = () =>(
    <Card style={{ width: '20%',height:'auto',position:'absolute'}}>
    <Card.Title style={{}}>Características</Card.Title>
    <Card.Body>
    <Card.Text>
        Texto características
    </Card.Text>
  </Card.Body>
  </Card>
);

const BuyButton=(props)=>(
    <Button
    onClick={() => {
        props.nav.navigate('BuyPage')
       }}>Comprar</Button>
);

export default ShoppingCart;