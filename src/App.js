import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [timeData, setTimeData] = useState({
    weeks: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const startDate = new Date('2025-03-23T17:00:00');
    
    const updateTimer = () => {
      const now = new Date();
      const timeDiff = now - startDate;
      
      if (timeDiff > 0) {
        const totalDays = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const weeks = Math.floor(totalDays / 7);
        const days = totalDays % 7;
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
        
        setTimeData({ weeks, days, hours, minutes, seconds });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <div className="container">
      <h1 className="title"><span style={{marginLeft: '20px'}} className="turtle-left">🐢</span> ❤️ <span style={{marginRight: '20px'}} className="turtle-right">🐢</span> </h1>
        <p className="subtitle">Time since March 23, 2025</p>
        
        <div className="timer-grid">
          <div className="timer-card">
            <div className="timer-value">{timeData.weeks}</div>
            <div className="timer-label">Weeks</div>
          </div>
          
          <div className="timer-card">
            <div className="timer-value">{timeData.days}</div>
            <div className="timer-label">Days</div>
          </div>
          
          <div className="timer-card">
            <div className="timer-value">{timeData.hours.toString().padStart(2, '0')}</div>
            <div className="timer-label">Hours</div>
          </div>
          
          <div className="timer-card">
            <div className="timer-value">{timeData.minutes.toString().padStart(2, '0')}</div>
            <div className="timer-label">Minutes</div>
          </div>
          
          <div className="timer-card">
            <div className="timer-value">{timeData.seconds.toString().padStart(2, '0')}</div>
            <div className="timer-label">Seconds</div>
          </div>
        </div>
        
        <div className="footer">
          <p>Made with ❤️ and React</p>
        </div>
      </div>
    </div>
  );
}

export default App; 