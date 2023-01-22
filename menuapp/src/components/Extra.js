import React from 'react'
import PropTypes from 'prop-types'
export default function Extra(props) {
  return (
    <div><nav className="navbar navbar-expand-lg" style={{backgroundColor: props.mode==='dark'?'lightgreen':'red'}}>
    <div className="container-fluid">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <a className="navbar-brand" href="#" style={{color: props.mode==='light'?'lightgreen':'black'}}>Navbar</a>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#" style={{color: props.mode==='light'?'lightgreen':'black'}}>Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" style={{color: props.mode==='light'?'lightgreen':'black'}}>Link</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" style={{color: props.mode==='light'?'lightgreen':'black'}}>Disabled</a>
          </li>
        </ul>
        <div class={`form-check form-switch text-${props.mode==='light'?'light':'dark'}`}>
          <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
          <label className="form-check-label" forhtml="flexSwitchCheckDefault" style={{color: props.mode==='light'?'lightgreen':'black'}}>Switch to a different Bg colour</label>
        </div>
        {/* <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form> */}
      </div>
    </div>
  </nav></div>
  )
}
