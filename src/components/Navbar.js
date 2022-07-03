import React from 'react'
import Form from 'react-bootstrap/Form';
// import { Link } from "react-router-dom";

export default function Navbar(props ) {
  return (
    <div>
          <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <a className={`navbar-brand text-${props.mode}`}></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
    <li className="nav-item active">
        <a className="nav-link" href="/home">{props.title} <span className="sr-only"> </span></a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="/">Home <span className="sr-only"> </span></a>
      </li>
      {/* <li className="nav-item">
        <Link className="nav-link" to="/about">{props.AboutText}</Link>
      </li> */}
  
    </ul>
    <Form onClick={props.toggleMode} className= {`text-${props.mode==='light'?'dark':'light'}`} >
      <Form.Check 
        type="switch"
        id="custom-switch"
        label="Enable Dark Mode
        "
      />
    </Form>
    
  </div>
</nav>
    </div>
  )
}

