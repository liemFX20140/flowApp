import { useEffect, useState, useRef } from 'react';
import styles from './Clock.module.css';

const Clock = ({ duration }) => {
  const [timeLeft, setTimeLeft] = useState(900);
  const [isActive, setIsActive] = useState(true);
  const secondsRef = useRef(null);
  useEffect(() => {
    secondsRef.current = setInterval(() => {
      if (isActive && timeLeft > 0) {
        setTimeLeft((prevTime) => prevTime - 1);
      }
    }, 1000);

    return () => clearInterval(secondsRef.current);
  }, [isActive, timeLeft]);
  useEffect(() => {
    if (timeLeft === 0) alert('time is up');
  }, [timeLeft]);
  function handlePause() {
    setIsActive(!isActive);
    clearInterval(secondsRef.current);
  }
  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60)
      .toString()
      .padStart(2, '0');
    const remainingSeconds = (seconds % 60).toString().padStart(2, '0');
    return `${minutes}:${remainingSeconds}`;
  }
  return (
    <div className={styles.container}>
      <div
        className={styles.timebar}
        style={{
          width: `${100 - (timeLeft * 100) / 900}%`,
        }}
      ></div>
      <div className={styles.clock}>{formatTime(timeLeft)}</div>
      <button className={styles.pauseBtn} onClick={handlePause}>
        {isActive ? 'Pause' : 'Resume'}
      </button>
    </div>
  );
};
export default Clock;
