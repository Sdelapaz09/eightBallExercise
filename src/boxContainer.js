import React, { useState } from "react";
import Box from "./Box";
import "./BoxesContainer.css";
import { choice, randIndt } from "./random";

const defaultColors = [
  "Aqua", "Lilac","Grey","Black", "Blue", "Cyan", "Brown", "Lavendar", "Forest Green", 
  "Lime Green", "Plum", "Violet", "Teal", "Turqouise", "Yellow", "Orange"
  ];

function BoxesContainer ({ allColors = defaultColors, numBoxes = 16}){
  const [boxes, setBoxes] = useState (getInitRandomColors);
  
  function getInitRandomColors(){
    return Array.from(
      { length: numBoxes }, () => choice(allColors));
  }
  
  function handleClick(e) {
    setBoxes(boxes => {
      let idx = randInt(numBoxes);
      let boxCopy = [...boxes];
      boxCopy[idx] = choice(allColors);
      return boxCopy;
    });
  }
  
  const boxComponents = boxes.map((color, i) => <Box key= [i] color={color} />);
  
  return (
    <div>
      <section className="BoxesContainer">{boxComponents}</section>
      <button onClick= {handleClick}> Change a box </button>
    </div>
  );
}
export default BoxesContainer;
