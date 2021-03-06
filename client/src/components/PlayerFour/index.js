import React from "react";
import "../PlayerStyle.css";

function Four(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Player Four Name:</strong> {props.name}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Four;