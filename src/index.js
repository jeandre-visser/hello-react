import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = (props) => {
  return (
    <button>{props.children}</button>
  );
};

const Application = (props) => {

  // your code here

  const reset = () => {
    console.log("reset");
    // your code here
  };

  return (
    <main>
      <button onClick={reset} >Reset</button>
      <h1>Hello React</h1>
    </main>
  );
};

ReactDOM.render(<Application />, document.getElementById("root"));
