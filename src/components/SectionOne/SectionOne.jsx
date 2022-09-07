import React from "react";
import "./SectionOne.scss";
import Navigation from "../Navigation/Navigation";
import right_arrow from "../../assets/left_lines.png";
import left_arrow from "../../assets/right_lines.png";
import cover_photo from "../../assets/upper_img.png";

export default function SectionOne() {
  return (
    <div className="SectionOne">
      <div className="navWrapper">
        <Navigation />
      </div>

      <div className="lines">
        <div className="left_arrows">
          <img src={left_arrow} alt="Left Arrows" />
        </div>
        <div className="right_arrows">
          <img src={right_arrow} alt="Right Arrows" />
        </div>
      </div>

      <div className="content">
        <div className="heading">
          <p>
            New Sport World In &nbsp;
            <span>Vientiane</span>
          </p>
          <button>BOOK NOW >> </button>
        </div>
        <div className="cover_img">
          <img src={cover_photo} alt="Cover Image" />
        </div>
      </div>
    </div>
  );
}
