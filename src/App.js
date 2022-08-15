import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import DragMove from "./DragMove";
import Background from "./Background";
import Waypoint from "./Waypoint";

function App() {
  const [translate, setTranslate] = useState({
    x: 0,
    y: 0
  });

  const handleDragMove = (e) => {
    setTranslate({
      x: translate.x + e.movementX,
      y: translate.y + e.movementY
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <svg width="850" height="605" viewBox="0 0 850 605">
          <Background />
          <DragMove isSvg={true} onDragMove={handleDragMove}>
            <g transform={`translate(${translate.x} ${translate.y})`}>
              <Waypoint />
            </g>
          </DragMove>
        </svg>
      </header>
    </div>
  );
}

export default App;
