import React from 'react';
import {Link} from "react-router-dom";

export default function Navbar() {
  return <>
  <nav className="navbar navbar-expand-lg bg-second text-white fixed-top">
    <div className="container px-5">
      <a className="navbar-brand px-4 mx-5 fs-3 fw-bolder text-white" href="/">START REACT</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav list-unstyled d-flex ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link px-4 py-3 mx-1" to="protifolio">PROTIFOLIO</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link px-4 py-3 mx-1" to="about">ABOUT</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link px-4 py-3 me-5" to="contant">CONTANT</Link>
          </li>
          </ul>
      </div>
    </div>
  </nav>
</>}
