/** @format */

import React from "react";
import Big_dots from "../images/bg-dots.svg";
import Chrome from "../images/logo-chrome.svg";
import Firefox from "../images/logo-firefox.svg";
import Opera from "../images/logo-opera.svg";
const Extension = () => {
  return (
    <div className="extension">
      <div className="extensionIntro">
        <h3>Download the extension</h3>
        <p>
          We've got more browsers in the pipeline. Please do let us know if
          you've got a favourite you'd like us to priotize
        </p>
      </div>
      <div className="extensionTypes">
        <div className="chromeExtension">
          <img src={Chrome} alt="" className="extensionLogo" />
          <h3>Add to Chrome</h3>
          <h5>Minimum version 62</h5>
          <img src={Big_dots} alt="" className="dots" />
          <button>Add & Install Extension</button>
        </div>
        <div className="firefoxExtension">
          <img src={Firefox} alt="" className="extensionLogo" />
          <h3>Add to Firefox</h3>
          <h5>Minimum version 55</h5>
          <img src={Big_dots} alt="" />
          <button>Add & Install Extension</button>
        </div>
        <div className="operaExtension">
          <img src={Opera} alt="" className="extensionLogo" />
          <h3>Add to Opera</h3>
          <h5>Minimum version 46</h5>
          <img src={Big_dots} alt="" />
          <button>Add & Install Extension</button>
        </div>
      </div>
    </div>
  );
};

export default Extension;
