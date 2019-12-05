import React, { useState } from "react";

function App() {
  let [currentTime, getCurrentTime] = useState(new Date().toLocaleTimeString());

  function showTime() {
    currentTime = new Date().toLocaleTimeString();
    getCurrentTime(currentTime);
  }
  setInterval(showTime, 1000);
  return (
    <div className="container">
      <h1>{currentTime}</h1>
      <button onClick={showTime}>Get Time</button>
    </div>
  );
}

export default App;
