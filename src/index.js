import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = (props) => {
  return (
    <button>{props.children}</button>
  );
};

const Application = (props) => {

  const [name, setName] = useState('');

  const reset = () => {
    console.log("reset");
    // your code here
  };

  return (
    <main>
      <input
        value={name}
        placeholder='Type your name'
        onChange={(event) => setName(event.target.value)}>
      </input>

      <button onClick={reset} >Reset</button>
      <h1>Hello {name}</h1>
    </main>
  );
};

ReactDOM.render(<Application />, document.getElementById("root"));
