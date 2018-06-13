import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import "./main.css";
import App from "./App";

// We'll need to wrap our
// react application with this HashRouter component in order for routing to work.
ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById("root")
);
