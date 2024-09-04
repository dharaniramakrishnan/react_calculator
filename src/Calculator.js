import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [input, setInput] = useState(''); // To store the current input
  const [result, setResult] = useState(''); // To store the result

  const handleClick = (value) => {
    setInput(input + value); // Append the clicked value to the current input
  };

  const handleClear = () => {
    setInput(''); // Clear the input field
    setResult(''); // Clear the result
  };

  const handleCalculate = () => {
    try {
      // eslint-disable-next-line no-eval
      const calculatedResult = eval(input); // Calculate the result using eval
      setResult(calculatedResult.toString()); // Convert the result to string
    } catch (error) {
      setResult('Error'); // If there's an error in calculation, show "Error"
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        <div className="input">{input}</div>
        <div className="result">{result}</div>
      </div>
      <div className="buttons">
        <button onClick={handleClear}>C</button>
        <button onClick={() => handleClick('/')}>/</button>
        <button onClick={() => handleClick('*')}>*</button>
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('-')}>-</button>
        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('+')}>+</button>
        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={handleCalculate}>=</button>
        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('.')}>.</button>
      </div>
    </div>
  );
};

export default Calculator;
