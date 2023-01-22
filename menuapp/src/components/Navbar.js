import React from 'react'
import PropTypes from 'prop-types'
// import {Link} from 'react-router-dom'
export default function Navbar(props) {
  return (
    // navbar-${props.mode}
    // bg-${props.mode}
    <div>
      <nav className="navbar navbar-expand-lg" style={{backgroundColor: props.mode==='dark'?'lightgreen':'purple'}}>
    <div className="container-fluid">
       <a className="navbar-brand" href="/" style={{color: props.mode==='light'?'lightgreen':'brown',fontSize: '21px'}}>{props.title}</a> 
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
      {/* <li className="nav-item">
            <a className="nav-link" href="/" style={{color: props.mode==='light'?'lightgreen':'black'}}>{props.title}</a>
          </li> */} 
        <ul className="navbar-nav me-auto">
        {/* <li className="nav-item">
            <a className="nav-link active  m-1" aria-current="page" href="/" style={{color: props.mode==='light'?'lightgreen':'black',fontSize: '20px'}}>{props.title}</a>
        </li> */}
          <li className="nav-item">
            <a className="nav-link active m-1 p-1" aria-current="page" href="/" style={{color: props.mode==='light'?'lightgreen':'brown',fontSize: '20px'}}>About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link m-1 p-1" href="/" style={{color: props.mode==='light'?'lightgreen':'brown',fontSize: '20px'}}>Services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link m-1 p-1" href="/" style={{color: props.mode==='light'?'lightgreen':'brown',fontSize: '20px'}}>Contact Us</a>
          </li>
        </ul>
        {/* <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form> */}
        <div class={`form-check form-switch text-${props.mode==='light'?'light':'dark'}`}>
          <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
          <label className="form-check-label" forhtml="flexSwitchCheckDefault" style={{color: props.mode==='light'?'lightgreen':'brown'}}>Switch to a different Bg colour</label>
        </div>
      </div>
    </div>
  </nav>
    </div>
  )
}
Navbar.prototypes={
    title: PropTypes.string
};
Navbar.defaultProps={
    title: 'See u again'
};