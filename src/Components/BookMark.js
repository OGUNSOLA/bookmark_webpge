/** @format */

import React from "react";
import IllustrationHero from "../images/illustration.png";

const BookMark = () => {
  return (
    <div className="bookmark">
      <div className="bookmarkTextAreea">
        <div className="heading">
          <h4>A SIMPLE BOOKMARK</h4>
          <h4>MANAGER</h4>
        </div>
        <p>
          A clean and simple interface to organize your favourite websites.Opens
          a new browser tab and see your sutes load instantly. Try it for free.
        </p>
        <div className="downloadIt">
          <button className="chrome">Get it on chrome</button>
          <button className="firefox">Get it on Firefox</button>
        </div>
      </div>
      <div className="bookmarkImageDiv">
        <div className="bookmarkImage">
          <img src={IllustrationHero} alt="" />
        </div>
      </div>
    </div>
  );
};

export default BookMark;
