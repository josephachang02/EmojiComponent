import React from 'react';
import { useMood } from '../../context/MoodContext';

const Emojis = () => {
  const { currentMood } = useMood();

  const getEmoji = () => {
    switch (currentMood) {
      case 'happy':
        return '😃';
      case 'fine':
        return '😐';
      case 'sad':
        return '😞';
      default:
        return '😐';
    }
  };

  return (
    <div>
      <h1>Your Mood:</h1>
      <span role="img" aria-label="Emoji">
        {getEmoji()}
      </span>
    </div>
  );
};

export default Emojis;