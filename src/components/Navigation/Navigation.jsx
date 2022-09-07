import React from "react";
import "./Navigation.scss";
import logo from "../../assets/logo.png";

export default function Navigation() {
  return (
    <div className="Navigation">
      <ul>
        <div>
          <li className="logo">
            <a href="/">
              <img src={logo} alt="Logo" />
            </a>
          </li>
          <li className="none">
            <a href="/">Home</a>
          </li>
          <li className="none">
            <select name="services" id="services">
              <option value="services">Services</option>
              <option value="services1">Services1</option>
              <option value="services2">Services2</option>
            </select>
          </li>
          <li className="none">
            <select name="classes" id="classes">
              <option value="classes">Classes</option>
              <option value="classes1">Classes1</option>
              <option value="classes2">Classes2</option>
            </select>
          </li>
          <li className="none">
            <select name="resturant" id="resturant">
              <option value="resturant">Resturant</option>
              <option value="resturant1">Resturant1</option>
              <option value="resturant2">Resturant2</option>
            </select>
          </li>
          <li className="none">
            <a href="#contact">Blog</a>
          </li>
          <li className="none">
            <a href="#contact">Shop</a>
          </li>
          <li className="none">
            <select className="lang" name="language" id="language">
              <option value="language">EN</option>
              <option value="language1">AR</option>
            </select>
          </li>
        </div>

        <li style={{ alignSelf: "right" }}>
          <a className="btn" href="#about">
            SIGN IN
          </a>
        </li>
      </ul>
    </div>
  );
}
