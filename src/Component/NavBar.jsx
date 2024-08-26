import React from 'react';
import "./Drink.css";
import logo from "../assets/logo.png"

function NavBar() {
  return (
    <nav className="d-flex">
      <img src={logo} className='h-14 w-14 md:h-20 md:w-20' alt="logo" />
      {/* <h1>LOGO</h1> */}
      <div className="cntr-nav d-flex">
        <a href="#">Product</a>
        <a href="#">Shop</a>
        <a href="#">Contact</a>
      </div>
      <i className="ri-menu-line"></i>
    </nav>
  );
}

export default NavBar;
