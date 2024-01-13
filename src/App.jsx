import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./components/ColorBlock";
import ColorBlock from "./components/ColorBlock";

function App() {
  const colorBlocks = [];

  let quantity = 10

  for (let i = 0; i < quantity; i++) {
    colorBlocks.push(<ColorBlock key={i} />);
  }

  return (
    <div className="container">
      {colorBlocks}
    </div>
  );
}
export default App;
