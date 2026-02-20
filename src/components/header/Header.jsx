import React from "react";
import scss from "./Header.module.scss";
import { NavLink } from "react-router-dom";
import logo from "../image/image 2.png";

const Header = () => {
  return (
    <div id={scss.header}>
      <div className="container">
        <div className={scss.header}>
          <div className={scss.logo}>
            <img src={logo} alt="" />
          </div>
          <div className={scss.header_nav}>
            <NavLink to="/" style={{ textDecoration: "none" }}>
              <h5>menu</h5>
            </NavLink>
            <NavLink to="/admin" style={{ textDecoration: "none" }}>
              <h5>admin</h5>
            </NavLink>
            <NavLink to="/orders" style={{ textDecoration: "none" }}>
              <h5>orders</h5>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
