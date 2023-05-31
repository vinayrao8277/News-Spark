import React, { Component } from 'react'
import {
    Link
  } from "react-router-dom";
  
export default class NavBar extends Component {
  render() {
    return (
      <div>
        <body className="hero-anime">	

            <div className="navigation-wrap bg-light start-header start-style">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <nav className="navbar navbar-expand-md navbar-light">
                            
                                <Link className="navbar-brand" to="/" target="_blank"><img src="https://assets.cdn.filesafe.space/FmFd7fJ4GTkRXjROVx7X/media/63199949a91ff5edee0533ca.png" alt=""/></Link>	
                                
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ml-auto py-4 py-md-0">
                                        <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                            <Link className="nav-link" data-toggle="dropdown" to="/" role="button" aria-haspopup="true" aria-expanded="false">Home</Link>
                                        </li>
                                        <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                            <Link className="nav-link" to="/about">About</Link>
                                        </li>
                                        <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                            <Link className="nav-link" to="/blog">Blog</Link>
                                        </li>
                                        <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                            <Link className="nav-link" to="/contact">Contact</Link>
                                        </li>
                                        <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                            <Link className="nav-link" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Services</Link>
                                            <div className="dropdown-menu">
                                                 <Link className="dropdown-item" to="/sports">Sports</Link>
                                                 <Link className="dropdown-item" to="/business">Business</Link>
                                                 <Link className="dropdown-item" to="/entertainment">Entertainment</Link>
                                                 <Link className="dropdown-item" to="/general">General</Link>
                                                 <Link className="dropdown-item" to="/health">Health</Link>
                                                 <Link className="dropdown-item" to="/science">Science</Link>
                                                 <Link className="dropdown-item" to="/technology">Technology</Link>
                                            </div>
                                        </li>        
                                    </ul>
                                </div>
                            </nav>		
                        </div>
                    </div>
                </div>
            </div>
            <div className="section full-height">
	        </div>
        </body>
      </div>
    )
  }
}
