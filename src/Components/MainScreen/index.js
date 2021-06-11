import React, { useState } from "react";
import CustomerList from "../Common/CustomerList";
import LeftBar from "../Common/LeftBar";
import RightBar from "../Common/RightBar";
import "./main.css";

function MainScreen() {
  const [toggleLeft, setToggleLeft] = useState(true);
  const [toggleRight, setToggleRight] = useState(true);

  return (
    <div className="main">
      {/* Toogle Left */}
      <div className={`leftbar ${!toggleLeft && "inactive"}`}>
        <LeftBar />
      </div>
      <div className="centerbar">
        <div className="buttonrow">
          <button
            className="btn-left"
            onClick={() => setToggleLeft(!toggleLeft)}
          >
            Toggle Left
          </button>
          <button
            className="btn-right"
            onClick={() => setToggleRight(!toggleRight)}
          >
            Toggle Right
          </button>
        </div>
        <CustomerList />
      </div>
      {/* Toggle Right */}
      <div className={`rightbar ${!toggleRight && "inactive"}`}>
        <RightBar />
      </div>
    </div>
  );
}

export default MainScreen;
