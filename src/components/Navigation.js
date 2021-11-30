import React from "react";
import { Link } from "react-router-dom";
import "../assets/styless.css";
import logo from "../assets/logo.png";

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light shadow">
      <div className="container pe-4 px-lg-5">
        <Link className="navbar-brand" to="/">
          <img
            src={logo}
            style={{ width: 50, height: 50 }}
            className="rounded "
            alt="Logo"
          />
          <span className="text-dongker fw-bolder ps-3">Covid-19 App</span>
        </Link>
        <button
          className="navbar-toggler btn-light border-dongker"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                <span className="text-dongker">Home</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                <span className="text-dongker">About</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
