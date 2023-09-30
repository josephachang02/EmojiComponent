import React from 'react';
import { useMood } from '../../context/MoodContext';

const ComplimentButton = () => {
  const { compliments, setCompliments, setCurrentMood } = useMood();

  const handleComplimentClick = () => {
    setCompliments(compliments + 1);

    if (compliments < 5) {
      setCurrentMood('sad');
    } else if (compliments >= 5 && compliments <= 9) {
      setCurrentMood('fine');
    } else if (compliments >= 10 && compliments <= 15) {
      setCurrentMood('happy');
    }
  };

  const handleResetClick = () => {
    setCompliments(0);
    setCurrentMood('neutral');
  };

  return (
    <div>
      <h2>Compliments: {compliments}</h2>
      <button onClick={handleComplimentClick}>Give Compliment</button>
      <button onClick={handleResetClick}>Reset</button>
    </div>
  );
};

export default ComplimentButton;