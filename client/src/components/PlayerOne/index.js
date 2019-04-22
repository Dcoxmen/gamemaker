import React from "react";
import "../PlayerStyle.css";
import image from "./PlayerOne.png";

function One(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt="image" src={image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Player One Name:</strong> {props.image},
          </li>
        </ul>
      </div>
    </div>
  );
}

export default One;
