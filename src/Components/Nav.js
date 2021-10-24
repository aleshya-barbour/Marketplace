import React from 'react'
import { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Products from './Items'
import Cart from './Cart';
import Home from './Home';
import About from './About'

export default class NavbarComp extends Component {
  render(){

  
  return (
    <Router>
      
      <Navbar bg="light" expand="xxl" fixed="top" variant="light" collapseOnSelect="false">
        <Container>
          <Navbar.Brand as={Link} to="/home">E-Commerce</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mr-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll >

              <Nav.Link as={Link} to="/Products">Products</Nav.Link>
              <Nav.Link as={Link} to="/Contact">Contact</Nav.Link>
              <Nav.Link as={Link} to="/Home">Home</Nav.Link>
              <Nav.Link as={Link} to="/About">About Us</Nav.Link>
              
            </Nav>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div>
        <Switch>
          <Route path="/Products">
            <Products/>
          </Route>
          <Route path="/Cart">
            <Cart />
          </Route>
          <Route path="/Home">
            <Home />
          </Route>
          <Route path="/About">
            <About />
          </Route>
        </Switch>
      </div>
           
    </Router>
  )
}
}

