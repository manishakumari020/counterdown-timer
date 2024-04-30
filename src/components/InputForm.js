import React, { useState } from 'react';
import "./InputForm.css"

const InputForm = ({ setTargetDate }) => {
  const [inputDate, setInputDate] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const selectedDate = new Date(inputDate);
    const currentDate = new Date();
    
    if (isNaN(selectedDate.getTime())) {
      setError('Invalid date format. Please enter a valid date and time.');
    } else if (selectedDate <= currentDate) {
      setError('Please select a future date and time.');
    } else if (selectedDate.getTime() - currentDate.getTime() > 100 * 24 * 60 * 60 * 1000) {
      setError('Selected time is more than 100 days.');
    } else {
      setTargetDate(selectedDate);
      setError('');
    }
  };

  return (
    <form  className="input-form" onSubmit={handleSubmit}>
      <input
        type="datetime-local"
        value={inputDate}
        onChange={(e) => setInputDate(e.target.value)}
        required
      />
      <button type="submit">Start Timer</button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default InputForm;

