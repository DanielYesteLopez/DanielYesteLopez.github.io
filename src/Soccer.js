import { Component } from 'react';
import logo from './images/appLogo.png';
import boots from './images/botas.jpg'
/*<img src={shoppingCart} alt="add item" width="30" background-color="white"/> */
import style from "./Soccer.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { Button,Card,ButtonGroup} from 'react-bootstrap';
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

const Soccer =({navigation})=>{
    return(
      <View style={{ flex: 1}}>
      <div className = {style.topHeader}>
          <LogoImageSoccer/>
        <BackMainSoccer nav={navigation}/>
        <OtherSportSoccer nav={navigation} />
        <ShoppingCartAccessSoccer nav={navigation}/>
      </div>
    <div className = {style.soccerBuy}>
        <SoccerItemSelector/>
        <Filter/>
    </div>
    <Button style={{fontFamily:'Roboto',width:'20%',marginLeft:'40%',marginTop:'3%', borderColor: '#ffaf7a',backgroundColor:'#ff6600'}} 
        >Añadir al carro</Button>
      </View>
    );
  }

const BackMainSoccer = (props) =>(
    <Form.Text className={style.backMain} 
    onClick={() => {
      props.nav.navigate('MainPage')
     }}> 
    Inicio
    </Form.Text>
);

const OtherSportSoccer = (props) =>(
    <Form.Text className={style.backsport} 
    onClick={() => {
      props.nav.navigate('SelectSport')
     }}> 
    Selecciona otro deporte
    </Form.Text>
    );

const ShoppingCartAccessSoccer = (props) =>(
      <Form.Text className={style.shoppingCart}
      onClick={() => {
        props.nav.navigate('ShoppingCart')
       }}> 
      Tu compra
      </Form.Text>
);

const LogoImageSoccer = () =>(
        <img src={logo} 
        className= {style.topHeaderImage} 
        alt = "Logo"/>
        );
const BootsImage = () =>(
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 20}}>
    <img src={boots} 
      className= {style.bootsImage} 
      alt = "Botas"
    />
     <Text style={{ fontSize:'small',fontFamily: 'Open Sans'}}>Botas Nike F90</Text>
 </View>

    );
const Filter = () =>(
    <Dropdown style={{left:'10%',fontFamily:'Roboto'}}>
<DropdownButton
as={ButtonGroup}
align={{ lg: 'end' }}
variant="white"
title="Ordenar por..."
id="dropdown-menu-align-responsive-1"
>
<Dropdown.Item eventKey="1">Talla</Dropdown.Item>
<Dropdown.Item eventKey="2">Color</Dropdown.Item>
</DropdownButton>
</Dropdown>
    );

const SoccerItemSelector = () =>(
  <Tab.Container id="list-group-tabs-example" defaultActiveKey="#Calzado" style={{ width: '20%',height:'100%' ,left:'80%'}} >
  <Row>
    <Col sm={4}>
      <ListGroup  >
        <ListGroup.Item style={{fontFamily:'Roboto'}}action href="#Calzado">
          Calzado
        </ListGroup.Item>
        <ListGroup.Item style={{fontFamily:'Roboto'}}action href="#Ropa">
          Ropa
        </ListGroup.Item>
        <ListGroup.Item action href="#Complementos">
          Complementos
        </ListGroup.Item>
      </ListGroup>
    </Col>
    <Col sm={8} >
      <Tab.Content>
        <Tab.Pane eventKey="#Calzado">
          <BootsImage/>
        </Tab.Pane>
        <Tab.Pane eventKey="#Ropa">
          <BootsImage/>
        </Tab.Pane>
        <Tab.Pane eventKey="#Complementos">
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>
);

export default Soccer;