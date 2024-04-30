import React, { useEffect, useState } from 'react';
import "./CounterdownTimer.css"

const CountdownTimer = ({ targetDate, onCancel }) => {
  const calculateTimeLeft = () => {
    const difference = targetDate - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [isTimeOver, setTimeOver] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);

      if (newTimeLeft.days === 0 && newTimeLeft.hours === 0 && newTimeLeft.minutes === 0 && newTimeLeft.seconds === 0) {
        setTimeOver(true);
      }
    }, 1000);

    return () => clearTimeout(timer);
  });

  useEffect(() => {
    if (timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0) {
      
    }
  }, [timeLeft]);

  const handleCancel = () => {
    onCancel();
  };

  return (
    <div className="countdown-timer">
      <div>
        {isTimeOver ? (
          <p>Time is over! What is your next adventure?</p>
        ) : (
          <div>
            {timeLeft.days > 0 && <button className='show-days-time'>{timeLeft.days} Days </button>}
            {timeLeft.hours > 0 && <button className='show-days-time'>{timeLeft.hours} Hours </button>}
            {timeLeft.minutes > 0 && <button className='show-days-time'>{timeLeft.minutes} Minutes </button>}
            {timeLeft.seconds > 0 && <button className='show-days-time'>{timeLeft.seconds} Seconds </button>}
          </div>
        )}
      </div>
      {timeLeft.days > 100 && <p>Selected time is more than 100 days.</p>}
      {!isTimeOver && <button onClick={handleCancel}>Cancel Timer</button>}
    </div>
  );
};

export default CountdownTimer;

