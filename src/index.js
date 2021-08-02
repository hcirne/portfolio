import React from "react";
import ReactDOM from "react-dom";
import Intro from "./Components/Intro";
import Navbar from "./Components/Navbar";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <Intro />
  </React.StrictMode>,
  document.getElementById("root")
);
