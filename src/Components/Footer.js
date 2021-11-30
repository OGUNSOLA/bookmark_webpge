/** @format */

import React from "react";
import bookmarkLogo from "../images/logo-bookmark-white.svg";
import githubIcon from "../images/icon-github-light.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="contact">
        <h3>35,000+ ALREADY JOINED</h3>
        <h2>Stay up-tp-date with what we're doing</h2>
        <div className="emailInput">
          <input type="email" placeholder="Enter Your E-mail Address"></input>
          <button>Contact Us</button>
        </div>
      </div>
      <div className="footerNav">
        <div className="leftSide">
          <div className="bookmarkLogo">
            <img src={bookmarkLogo} alt="bookmark logo" />
            <h3>BOOKMARK</h3>
          </div>
          <h3>FEATURES</h3>
          <h3>PRICING</h3>
          <h3>CONTACT</h3>
        </div>

        <img src={githubIcon} alt="" className="github"/>
      </div>
    </div>
  );
};

export default Footer;
