import React, { useState, useEffect } from 'react';
import './HomePage.css';

const HomePage = () => {
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  // Format time in MM:SS format
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60).toString().padStart(2, '0');
    const seconds = (timeInSeconds % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  // Toggle timer on/off
  const handleTimerClick = () => {
    if (!isTimerRunning) {
      // Start the timer
      const id = setInterval(() => {
        setElapsedTime(prev => prev + 1);
      }, 1000);
      setIntervalId(id);
      setIsTimerRunning(true);
    } else {
      // Stop the timer
      clearInterval(intervalId);
      setIntervalId(null);
      setIsTimerRunning(false);
      setElapsedTime(0); // Reset timer when stopped
    }
  };

  // Handle reset
  const handleReset = () => {
    setElapsedTime(0);
  };

  // Clean up interval on unmount
  useEffect(() => {
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [intervalId]);

  return (
    <view className="home-container">
      <view className={`outer-border ${isTimerRunning ? 'fill-border' : ''}`} bindtap={handleTimerClick}>
        <view className="progress-indicator" style={{ width: `${(elapsedTime % 60) / 60 * 100}%` }}></view>
        <view className='circle'>
          <text className="timer-text">{isTimerRunning ? formatTime(elapsedTime) : 'Start'}</text>
        </view>
      </view>
     
      {/* {isTimerRunning && (
        <view className="controls">
          <view className="control-button reset" bindtap={handleReset}>
            <text>Reset</text>
          </view>
        </view>
      )} */}
    </view>
  );
};

export default HomePage;
