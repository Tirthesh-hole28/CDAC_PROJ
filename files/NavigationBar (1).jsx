import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark" fixed='top'>
 <Nav.Link as={NavLink} to="/">
      <Navbar.Brand>DayCare</Navbar.Brand>
</Nav.Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <div>        
        <Nav className="ml-auto">
          <Nav.Link as={NavLink} to="/login">
            Login
          </Nav.Link>
          <Nav.Link as={NavLink} to="/register">
            Register
          </Nav.Link>
        </Nav>
          </div>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;
