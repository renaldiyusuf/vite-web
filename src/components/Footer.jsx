import React from "react";
import "../styles/Global.css";
import Logo from "../assets/mhv-logo.png";

export default function Footer() {
  return (
    <div>
      <footer>
        <div class="top">
          <div class="logo">
            <img src={Logo} alt="Logo" />
            <a href="#main">MULTI HAR VENTURA</a>
          </div>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">News and Blog</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
          </ul>
          <div class="social-links">
            <a href="#">
              <box-icon type="logo" name="facebook-square"></box-icon>
            </a>
            <a href="#">
              <box-icon type="logo" name="twitter"></box-icon>
            </a>
            <a href="#">
              <box-icon name="instagram" type="logo"></box-icon>
            </a>
            <a href="#">
              <box-icon name="linkedin-square" type="logo"></box-icon>
            </a>
          </div>
        </div>
        <div class="separator"></div>
        <div class="bottom">
          <p>Made By Renaldi Yusuf</p>
          <div class="links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms and Conditions</a>
            <a href="#">Cookies Setting</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
