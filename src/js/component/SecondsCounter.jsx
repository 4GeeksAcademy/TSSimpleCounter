import React, { useState, useEffect } from 'react';
import PropTypes from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import '/workspaces/TSSimpleCounter/src/styles/SecondsCounter.css';

const SecondsCounter = ({ initialSeconds }) => {
  const [seconds, setSeconds] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const [alertTime, setAlertTime] = useState(null);

  useEffect(() => {
    startTimer();
  }, []);

  const startTimer = () => {
    const id = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds === alertTime) {
          alert('Your time was reached!');
        }
        return prevSeconds + 1;
      });
    }, 1000);
    setIntervalId(id);
  };

  const stopTimer = () => {
    clearInterval(intervalId);
  };

  const resetTimer = () => {
    setSeconds(initialSeconds);
  };

  const resumeTimer = () => {
    if (!intervalId) {
      startTimer();
    }
  };

  const setAlert = (time) => {
    setAlertTime(time);
  };

  return (
    <div className="counter">
      <div className="counter-box">
        <FontAwesomeIcon icon={faClock} />
      </div>
      {/* <div className="counter-box">{Math.floor(seconds / 1000000) % 10}</div> */}
      <div className="counter-box">{Math.floor(seconds / 100000) % 10}</div>
      <div className="counter-box">{Math.floor(seconds / 10000) % 10}</div>
      <div className="counter-box">{Math.floor(seconds / 1000) % 10}</div>
      <div className="counter-box">{Math.floor(seconds / 100) % 10}</div>
      <div className="counter-box">{Math.floor(seconds / 10) % 10}</div>
      <div className="counter-box">{seconds % 10}</div>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
      <button onClick={resumeTimer}>Resume</button>
      <input type="number" onChange={(e) => setAlert(e.target.value)} placeholder="Alert time" />
    </div>
  );
};

export default SecondsCounter;

