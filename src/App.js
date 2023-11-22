import react, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, inc, increment } from './Redux/Actions';

function App() {

  const dispatch = useDispatch()
  const counterReducer = useSelector(state => state.counterReducer)
  const {value, arr} = counterReducer

  // states -> useSelector , actions-> useDispatch
  const setIncrement = () => {
    dispatch(increment(value+1))
  }
  const setDecrement = () => {
    dispatch(decrement(value-1))
  }

  const setInc = () => {
    dispatch(inc(5))
  }
  return (
    <div className="App">
      <button onClick={setIncrement}> + </button>
      {value}~
      <button onClick={setDecrement}> - </button>
      {arr}
      <button onClick={setInc}>+5</button>
    </div>
  );
}

export default App;
