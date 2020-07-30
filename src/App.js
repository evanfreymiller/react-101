import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const title = "Happy Hour Indicator";

  const currentHour = new Date().getHours();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{title}</h1>
        <DetermineHappyHour currentHour={currentHour} name="Evan" />
      </header>
    </div>
  );
}

const DetermineHappyHour = (props) => {
  if (props.currentHour >= 17) {
    return <div>It's time for Happy Hour {props.name}!</div>;
  }
  return <div>It's not time for Happy Hour {props.name}</div>;
};

export default App;
