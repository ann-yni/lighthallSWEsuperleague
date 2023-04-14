import { React, useState, useEffect } from 'react';
import './App.css';

export default function App() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(prevCount => {
      const newCount = Number(prevCount) + 1;
      localStorage.setItem("count", newCount);
      return newCount;
    });
  };

  useEffect(() => {
    const initialValue = localStorage.getItem("count");
    if (initialValue) setCount(initialValue);
  }, []);

  console.log(localStorage.getItem("count"));

  return (
    <div className="counter">
      <h1>Lighthall React Clicker Counter</h1>
      <h2>Total Clicks:</h2>
      <span className="counter_output">{count}</span>
      <div className="btn_container">
        <button className="control_btn" onClick={increase}>Click Here to Add!</button>
      </div>
    </div>
  );
}