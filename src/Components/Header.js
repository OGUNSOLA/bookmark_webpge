/** @format */

import React, { useState } from "react";
import Menu from "../images/Hamburger_Menu.svg";
import bookmarkLogo from "../images/logo-bookmark.svg";

import { Button } from "@material-ui/core";

const Header = () => {
  const [show, setShow] = useState(false);

  const theClass = show ? "expanded" : "links";
  const menuClass = show ? "hideMenu " : "showMenu";


  return (
    <div className="navBar">
      <img src={bookmarkLogo} alt="bookmark logo" />

      <div className="rightSideNav">
        <img
          src={Menu}
          alt="bookmark logo"
          className={`${menuClass}`}
          onClick={() => setShow(true)}
        />
        <div className="linksDiv">
          <ul className={` ${theClass}`}>
            <li id="close-btn" onClick={() => setShow(false)}>
              X
            </li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Contact</li>
            <li>
              <Button variant="contained" className="login">
                Login
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
