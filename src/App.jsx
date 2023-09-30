import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
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