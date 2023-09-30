import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
<<<<<<< HEAD
import React from 'react';
import { MoodProvider } from './context/MoodContext';
import Emojis from './components/Emojis';
import ComplimentButton from './components/ComplimentButton';

function App() {
  return (
    <MoodProvider>
      <div className="App">
        <Emojis />
        <ComplimentButton />
      </div>
    </MoodProvider>
  );
}

export default App;
=======

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
>>>>>>> 3a97f4ae24369697b393785e6e3c19faface7013
