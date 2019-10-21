import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Avatar from "./Components/Avatar/Avatar";
import face from "./Components/Avatar/face.jpg";

function App() {
  return (
    <div className="App">
      <Avatar image={face} />
      <Avatar image={face} round />
      <Avatar image={face} circle />
      <Avatar image={face} medium />
      <Avatar image={face} large />
    </div>
  );
}

export default App;
