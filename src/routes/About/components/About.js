import React from 'react'
import {Nav, Navbar, NavItem, NavDropdown, MenuItem,FormGroup,FormControl,Button} from "react-bootstrap";
import coverImage from '../assets/IMG_2110.jpg'
import './About.scss'
export const About = (props) => (
  <div>
  <div className='container center text-center inside'>
  <div className='container text-center white'>
    <br/><br/><br/>
    ---<br/>
    Pisit Wetchayanwiwat | <a href="mailto:blysxaye@icloud.com" target="_top">blysxaye@icloud.com</a> | +66-89-067-3888

    <br/>
    ---
    <br/>
    <br/>
    <a href="mailto:blysxaye@icloud.com" target="_top" className="icon rcorners1"><i className="fa fa-envelope"></i></a>
    <a href="http://github.com/blyscuit" className="icon rcorners1"><i className="fa fa-github"></i></a>
    <br/><br/><br/><br/>
    <a href="http://confusians.com" className="rcorners2">confusians.com</a>
    </div>
  </div>
  <img className="cover" src={coverImage}/>

</div>
)

export default About
