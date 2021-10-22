import React, { Component } from 'react'
import {
  Link
} from "react-router-dom";



 const Navbar= ()=>{
    
        return (
            <div>
                <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/">NewsExpress</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
  
        <li class="nav-item">
          <Link className="nav-link" to="/business">Business </Link>
        </li>
        <li class="nav-item">
          <Link className="nav-link" to="/entertainment">Entertainment</Link>
        </li>
        <li class="nav-item">
          <Link className="nav-link" to="/general">General</Link>
        </li>
        <li class="nav-item">
          <Link className="nav-link" to="/health">Health</Link>
        </li>
        <li class="nav-item">
          <Link className="nav-link" to="/science">Science</Link>
        </li>
        <li class="nav-item">
          <Link className="nav-link" to="/sports">Sports</Link>
        </li>
        <li class="nav-item">
          <Link className="nav-link" to="/technology">Technology</Link>
        </li>
        
        
      </ul>
    </div>
  </div>
</nav>
            </div>
        )
    
}

export default Navbar
