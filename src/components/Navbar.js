import React from "react";
// import props from "prop-types";

import 'bootstrap/dist/css/bootstrap.min.css';
import { joinPaths } from "@remix-run/router";

export default function Navbar(props) {
  // let myStyle = {
  //   color: 'red' ,
  //   background : 'yellow'
  // }
  return (
    <>

    <nav className={`navbar navbar-expand-lg navbar- bg-${props.mode}`}> 
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Link</a>
              </li>
              <li className="nav-item"><a className="nav-link" href="/about">About</a></li>
              <li className="nav-item"><a className="nav-link" href="/Business">Business</a></li>
              <li className="nav-item"><a className="nav-link" href="/General">General</a></li>
              <li className="nav-item"><a className="nav-link" href="/Science">Science</a></li>
              <li className="nav-item"><a className="nav-link" href="/Technology">Technology</a></li>
            </ul>
            {/* <div className="d-flex">
              <div className="bg-primary rounded mx=2" onClick ={()=>(props.toggleMode('primary'))} style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
              <div className="bg-danger rounded mx=2" onClick ={()=>(props.toggleMode('danger'))} style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
              <div className="bg-success rounded mx=2" onClick ={()=>(props.toggleMode('success'))} style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
            </div>
            {/* <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form> */}
              {/* <div className={`form-check form-switch text-${props.mode==='dark'}`}>
               <input className="form-check-input" onClick = {props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
               <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >Enable Dark Mode</label>
            </div> */}
          </div> 
          </div> 
      </nav>
      </>

  );
}



               