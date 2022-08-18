/* type "rfc" to fetch react base component from extension
    Just type "<Navbar>" into App.js file, it will automatically import /components/Navbar.js ile
    to make it more user friendly just save the <nav> code of App.js into this react function which will return 
    Navbar into App.js
    <a className="navbar-brand" href="/">textutils</a>    ...  
    --------change {props.title} inplace of textutils for using props which are located in App.js file

    PROPTYPE:
    ---------
    In this topic, we defined the data typeof props
*/

import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';


export default function Navbar(props) {
/*<nav className="navbar navbar-expand-lg navbar-dark bg-dark">*/               // EARLIER IT WAS THIS AT LINE 21
  return (

    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link>
        {/* <a className="navbar-brand" href="/">{props.title}</a> */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/">Home</Link>
                    {/* <a className="nav-link active" aria-current="page" href='/'>Home</a> */}
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/about">{props.aboutText}</Link>                    
                </li>
            </ul>
            {/* <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button cla
                ssName="btn btn-primary" type="submit">Search</button>
            </form> */}

            {/* BELOW LOGIC IS FOR CHAGE INTO BACKGROUND COLOR OF PAGE */}
            {/* <div className="d-flex">
                <div className="bg-primary rounded mx-2" onClick={()=>{props.toggleMode('primary')}} style={{height: '30px', width:'30px', cursor: 'pointer'}}></div>
                <div className="bg-danger rounded mx-2" onClick={()=>{props.toggleMode('danger')}} style={{height: '30px', width:'30px', cursor: 'pointer'}}></div>
                <div className="bg-success rounded mx-2" onClick={()=>{props.toggleMode('success')}} style={{height: '30px', width:'30px', cursor: 'pointer'}}></div>
                <div className="bg-warning rounded mx-2" onClick={()=>{props.toggleMode('warning')}} style={{height: '30px', width:'30px', cursor: 'pointer'}}></div>
                <div className="bg-light rounded mx-2" onClick={()=>{props.toggleMode('light')}} style={{height: '30px', width:'30px', cursor: 'pointer'}}></div>
                <div className="bg-dark rounded mx-2" onClick={()=>{props.toggleMode('dark')}} style={{height: '30px', width:'30px', cursor: 'pointer'}}></div>
            </div> */}

            <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}> {/* THIS IS TURNERY JS. IF TEXT MODE IS LIGHT, MAKE IT DARK & VICE VERA */}
                <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
            </div>
        </div>
    </div>
</nav>
  )
}


Navbar.propTypes = {            /* In this function we are defining data types of props */
    title : PropTypes.string,
    aboutText : PropTypes.string
}

Navbar.defaultProps = {         /* we will defined default props in this way which we can utilize later on frequently */
    title: 'Set title here',
    aboutText: 'About'
};
