import { useState } from "react";
import "./ColorBlock.css";
  
  
function randomHex() {
    return Math.floor(Math.random()*16777215).toString(16)
  }


export default function ColorBlock() {
  const [color, setColor] = useState("#" + randomHex()); 

  function randomHex() {
    return Math.floor(Math.random()*16777215).toString(16)
  }

  const changeColor = () => {
    setColor("#" + randomHex()); 
  };

  const handleSpanClick = (event) => {
    // Останавливаем всплытие события
    event.stopPropagation();
  };

  return (
    <>
      <div onClick={changeColor} className="block" style={{ backgroundColor: color }}><span onClick={handleSpanClick}>{color}</span></div>
    </>
  );
}