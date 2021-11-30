/** @format */

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import IllustrationHero from "../images/illustration-hero.svg";

const Features = () => {
  const links = [
    "Bookmark in one click",
    "Intelligent search",
    "Share your bookmarks",
  ];

  const [selectedIndex, setSelectedIndex] = useState(false);
  const [selected, setSelected] = useState(null);

  const select = (index) => {
    setSelected(true);
    selected === true ? setSelectedIndex(index) : setSelectedIndex(null);
  };

  const theClass = selected ? "activeLink " : "notActiveLink";

  return (
    <div className="features">
      <div className="featuresIntro">
        <h3>Features</h3>
        <p className="featuresHighlight">
          Our aim is to make it quick and easy for you to access your favourite
          websites.Your bookmarks sync between your devices so you can access
          them on the go{" "}
        </p>
      </div>
      <div className="featureslinks">
        {links.map((link, index) => {
          return (
            <NavLink
              to={link}
              key={index}
              onClick={() => {
                select(index);
              }}
              className={` ${theClass}`}
            />
          );
        })}
      </div>
      <hr />
      <div className="featuresBooking">
        <div className="featuresBookmarkImageDiv">
          <div className="featuresBookmarkImage">
            <img src={IllustrationHero} alt="" />
          </div>
        </div>

        <div className="featuresDetails">
          <h3>Book in one click</h3>
          <p>
            Organize your bookmarks however you like. Our simple drag-and-drop
            interface gives you complete control over how you mange your
            favourite sites
          </p>
          <button>More Info</button>
        </div>
      </div>
    </div>
  );
};

export default Features;
