// App.js
import React, { useState } from "react";
import "./App.css";
import InputForm from "./components/InputForm";
import CountdownTimer from "./components/CountdownTimer"

const App = () => {
  const [targetDate, setTargetDate] = useState(null);

  const handleSetTargetDate = (date) => {
    setTargetDate(date);
  };

  const handleCancelCountdown = () => {
    setTargetDate(null);
  };

  return (
    <div className="App">
      <h1>Countdown Timer</h1>
      {!targetDate && <InputForm setTargetDate={handleSetTargetDate} />}
      {targetDate && <CountdownTimer targetDate={targetDate} onCancel={handleCancelCountdown} />}
    </div>
  );
};

export default App;
