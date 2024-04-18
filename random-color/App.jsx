import React, { useEffect, useState } from "react";

const App = () => {
  const [typeOfColor, settypeOfColor] = useState("HEX");
  const [color, setcolor] = useState("#FFFFFF");

  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function handleCreateRandomHexColor() {
    let hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    setcolor(hexColor);
  }

  function handleCreateRandomRgbColor() {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);
    setcolor(`rgb(${r},${g},${b})`);
  }
  useEffect(() => {
    if (typeOfColor == "RGB") handleCreateRandomRgbColor();
    else handleCreateRandomHexColor();
  }, [typeOfColor]);
  return (
    <div
      className="bgc"
      style={{
        height: "100vh",
        width: "100vw",
        backgroundColor: color,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div className="main">
        <button
          onClick={() => {
            settypeOfColor("RGB");
          }}
        >
          RGB Color
        </button>

        <button
          onClick={() => {
            settypeOfColor("HEX");
          }}
        >
          HEX Color
        </button>

        <button
          onClick={
            typeOfColor === "HEX"
              ? () => handleCreateRandomHexColor()
              : () => handleCreateRandomRgbColor()
          }
        >
          Create Random Color
        </button>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "40px",
            marginTop: "50px",
          }}
        >
          <h1>{typeOfColor} : </h1>
          <h1>{color}</h1>
        </div>
      </div>
    </div>
  );
};

export default App;
