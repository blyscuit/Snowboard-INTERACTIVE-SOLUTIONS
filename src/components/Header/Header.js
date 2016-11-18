import React, {Component} from 'react'
import { IndexLink, Link } from 'react-router'
import './Header.scss'
import {Nav, Navbar, NavItem, NavDropdown, MenuItem,FormGroup,FormControl,Button} from "react-bootstrap";
import LogoImage from './assets/logo.png'
import axios from 'axios'
export default class Header extends Component{
  constructor(props) {
      super(props);
      this.state = {value: ''};
      this.SURL = 'https://restcountries.eu/rest/v1';
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    }
  handleChange(event) {
    this.setState({value: event.target.value});
    console.log(this.state.value);
  }
  handleKeyPress(target) {
      if(target.charCode==13||target.key === 'Enter'){
  axios.get(this.SURL+'/name/'+this.state.value)
  .then(function(response) {
      var arr = [];
      for (var i = 0; i < response.data.length; i++) {
        arr.push(response.data[i].name);
      }
      alert(arr);
  })
  .catch(function (error) {
    alert("No countries found.");
  });
      }

  }
  render() {
    return (
      <div>
      <Navbar inverse staticTop fluid className="navBarNew">
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/"><img
              alt='Logo'
              className='mainLogo'
              src={LogoImage}/></a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="">Shop</NavItem>
            <NavItem eventKey={2} href="">Team</NavItem>
            <NavItem eventKey={3} href="">Events</NavItem>
            <NavItem eventKey={4} href="">Experience</NavItem>
            <NavItem eventKey={5} href="">Company</NavItem>
            <NavItem eventKey={6} href="/contact">Contact</NavItem>
          </Nav>
          <Nav pullRight>
          <Navbar.Form pullLeft>
          <div className="box">
  <div className="container-1">
      <span className="icon"><i className="fa fa-search"></i></span>
      <input value={this.state.value} onChange={this.handleChange} onKeyPress={this.handleKeyPress} type="search" id="search" placeholder="Search" />
  </div>
</div>

</Navbar.Form>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      </div>
    );
  }
}

// export default Header
