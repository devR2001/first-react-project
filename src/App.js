import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {

  const [count, setCount] = useState(0)
  const [text, setText] = useState('')

  function handleIncrement() {
    setCount(count + 1)
  }

  function handleDecrement() {
    if (count > 0){
      setCount(count - 1 )
    } else {
      setCount(0)
    }
  }

  function handleButtonClick() {
    alert("Button wurde geklickt")
  }

  function handleTextChange(e) {
    setText(e.target.value)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hallo, ich lerne React!
        </p>
        <button onClick={handleButtonClick}>Click mich Button</button>
        <button onClick={handleIncrement}>Erhöhen</button>
        <p>Zähler: {count}</p>
        <button onClick={handleDecrement}>Verringern</button>
        <input
          type="text"
          placeholder='Gib hier etwas ein'
          value={text}
          onChange={handleTextChange}
        />
          <p>Eingegebener Text: {text}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
