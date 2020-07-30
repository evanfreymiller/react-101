import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const happyHour = false;
  const title = "React 101";

  const isHappyHour = () => {
    if (happyHour) {
      return "It's time for Happy Hour!";
    }
    return "It's not time for Happy Hour";
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{title}</h1>
        {isHappyHour()}
      </header>
    </div>
  );
}

export default App;
