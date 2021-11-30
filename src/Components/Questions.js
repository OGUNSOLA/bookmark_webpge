/** @format */

import React, { useState } from "react";
import ArrowIcon from "../images/icon-arrow.svg";

const Questions = () => {
  const [expanded, setExpanded] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState(null);

  const showMore = (index) => {
  
    setExpanded(!expanded);
   
    expanded === true ? setExpandedIndex(index) : setExpandedIndex(null);
  };

  const questions = [
    {
      title: "Frequently Asked Questions",
      desc: "Here are soome of our FAQs. if you have any other questions you'd like answered pleease feel free to email us",
    },
    {
      title: "What is a Bookmark?",
      desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Liberoenim sed faucibus turpis in eu mi bibendum. Amet luctus venenatis lectus magna fringilla urna porttitor.",
    },
    {
      title: "How can I request a new browser?",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Liberoenim sed faucibus turpis in eu mi bibendum. Amet luctus venenatis lectus magna fringilla urna porttitor.",
    },
    {
      title: " Is there a mobile app?",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Libero enim sed faucibus turpis in eu mi bibendum. Amet luctus venenatis lectus magna fringilla urna porttitor.",
    },
    {
      title: "What about otheer Chromium browsers?",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Liberoenim sed faucibus turpis in eu mi bibendum. Amet luctus venenatis lectus magna fringilla urna porttitor.",
    },
  ];
  return (
    <div className="freqAskedQtns">
      <h3>Frequently Asked Questions</h3>
      <p>
        Here are soome of our FAQs. if you have any other questions you'd like
        answered pleease feel free to email us.
      </p>
      {questions.map((question, index) => {
        return (
          <div className="qtn" key={index}>
            <h5>
              {question.title}{" "}
              <span>
                <img src={ArrowIcon} alt="" onClick={() => showMore(index)} />
              </span>
            </h5>
            {expandedIndex === index ? <p>{question.desc}</p> : null}
          </div>
        );
      })}
      <button>More Info</button>
    </div>
  );
};

export default Questions;
