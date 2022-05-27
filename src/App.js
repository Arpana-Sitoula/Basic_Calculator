import React from "react";
import { useState } from 'react';

function App() {
  const [calc, setCalc] = useState("");
  // const [result, setResult] = useState("");

  const ops = ['/', '*', '+', '-', '.'];

  const updateCalc = value => {
    if(
      ops.includes(value)&&calc==='' ||
      ops.includes(value)&&ops.includes(calc.slice(-1))
    ){
    return;
    }
      setCalc(calc + value);
  }

  const createDigits = () => {
    const digits = [];
    for (let i = 1; i < 10; i++) {
      digits.push(
        <button key={i} onClick={()=> updateCalc(i.toString())}>{i}</button>
      )
    }
    return digits;
  }
  const res = () => {
    setCalc(eval(calc).toString());
  }
  const deleteLast = () => {
    if (calc == ''){
      return;
    }
    const value = calc.slice(0,-1);
    setCalc(value);
  }
  return (
    <div className="App">
      <div className="calculator">
        <h3>Calculator</h3>
        <div className="display">
          <span>{calc || '0'}</span>
        </div>
        <div className="operators">
          <button onClick={()=> updateCalc('/')}>/</button>
          <button onClick={()=> updateCalc('*')}>*</button>
          <button onClick={()=> updateCalc('+')}>+</button>
          <button onClick={()=> updateCalc('-')}>-</button>
        </div>
       
        <div className="digits">
          {createDigits()}
          <button onClick={()=> updateCalc('0')}>0</button>
          <button onClick={()=> updateCalc('.')}>.</button>
          <button className="res" onClick={res}>=</button>
        </div>
        <div className="extra">
        <button onClick={deleteLast}>DEL</button>
          <button onClick={()=>setCalc("")}>AC</button>
          <button onClick={()=>setCalc("")}>C</button>
        </div>
      </div>
    </div>
  );
}

export default App;
