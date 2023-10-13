import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">

                <Link className="nav-link" to={'/'}>Home</Link>
              </li>
              <li className="nav-item" style={{ color: 'white' }}>

                <Link className="nav-link" to={'/about'}>{props.aboutText}</Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
            
                <div className='d-flex'>
                  <div className='bg-black mx-2' onClick={props.toggleMode} style={{ height: '30px', width: '50px', borderRadius: '10PX' }}></div>
                </div>
                <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'} `}>
                  <input className="form-check-input " type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
                  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Toggle mode</label>
                </div>
              
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  title: propTypes.string.isRequired,
  aboutText: propTypes.string
};

Navbar.defaultProps = {
  title: 'Add Text',
  aboutText: 'About'
};