import React from "react";
import "../styles/Global.css";

export default function Footer() {
  return (
    <div>
      <footer>
        <div class="top">
          <div class="logo">
            <img src="../assets/mhv-logo.png" />
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
              <i class="bx bxl-facebook-circle"></i>
            </a>
            <a href="#">
              <i class="bx bxl-linkedin-square"></i>
            </a>
            <a href="#">
              <i class="bx bxl-blogger"></i>
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
