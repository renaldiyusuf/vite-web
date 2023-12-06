import React from "react";
import "../styles/Global.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav>
        <div class="logo">
          <img src="../assets/mhv-logo.png" />
          <a href="#main">MULTI HAR VENTURA</a>
        </div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products and Services</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/teams">Our Teams</Link>
          </li>
        </ul>
        <button>Consult with us</button>
        <button id="menuButton" onclick="openMenu()">
          <i class="bx bx-menu"></i>
        </button>
      </nav>
    </div>
  );
}
