import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const happyHour = false;
  const title = "React 101";

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{title}</h1>
        {happyHour ? <HappyHour /> : <NotHappyHour />}
      </header>
    </div>
  );
}

const HappyHour = () => {
  return (
    <div>It's time for Happy Hour!</div>
  )
}

const NotHappyHour = () => {
  return (
    <div>It's not time for Happy Hour</div>
  )
}

export default App;
