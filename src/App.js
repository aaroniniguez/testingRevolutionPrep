import React from "react";
import logo from "./images/logo.png";
import EmployeeCards from "./components/EmployeeCards";
import "./App.css";

function App() {
  return (
    <div className="App">
      <img
        style={{ marginTop: "20px", width: "100px", height: "100px" }}
        src={logo}
        alt="logo"
      />{" "}
      <h2>Employee Revenue Performance</h2>
      <div className="cardContainer">
        <EmployeeCards />
      </div>
    </div>
  );
}

export default App;
