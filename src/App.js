import * as React from "react";
import { ethers } from "ethers";
import "./App.css";

export default function App() {
  const wave = () => {};

  return (
    <div className="mainContainer">
      <div className="dataContainer">
        <div className="header">
          <h1>👋 Hey there!</h1>
          <h6>
            I'm Mriyank. This is my first Web3 App, connect your etherium wallet
            and wave at me.
          </h6>
        </div>

        <button className="waveButton" onClick={wave}>
          Wave at Me
        </button>
      </div>
    </div>
  );
}
