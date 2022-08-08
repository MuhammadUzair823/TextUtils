import React, { useState } from 'react';
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import App from '../App';
import About from './About';

export default function Navbar(props) {
  const [btntextChange,setbtntextChange] = useState('Enable dark mode');
  const handleOnChange = (e) =>{
    if(e.target.checked == true)
    {
        setbtntextChange ("Enable light mode");
    }
    else{
        setbtntextChange ("Enable dark mode");
    }
   }
  return (
   
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <Link to="/" className="navbar-brand" >{props.logoName}</Link>
      {/* <a  href='#' className="navbar-brand" >{props.logoName}</a> */}
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active"  to="/" >{props.homeText}</Link>
            {/* <a className="nav-link active"  href='/'>{props.homeText}</a> */}
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to="/about" >{props.aboutText}</Link>
          </li>
          </ul>

        <div className='my-3'>
            <div className={`form-check form-switch `}>
                <input className="form-check-input" type="checkbox" onChange={props.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
                <label className={`form-check-label text-${props.mode === 'light' ? 'dark' : 'light'}`} htmlFor="flexSwitchCheckDefault">{btntextChange}</label>
            </div>
        </div>
      </div>
    </div>
  </nav>
  )
}

Navbar.ReactPropTypes = {logoName : PropTypes.string,
    homeText : PropTypes.string,
    dropdownText : PropTypes.string,
    disabledText : PropTypes.string,
}