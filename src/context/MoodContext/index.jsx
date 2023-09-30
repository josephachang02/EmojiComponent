import { createContext, useState, useContext } from 'react'


const MoodContext = createContext();

export const MoodProvider = ({ children }) => {
  const [currentMood, setCurrentMood] = useState('neutral');
  const [compliments, setCompliments] = useState(0);

  return (
    <MoodContext.Provider value={{ currentMood, setCurrentMood, compliments, setCompliments }}>
      {children}
    </MoodContext.Provider>
  );
};

export const useMood = () => {
  const context = useContext(MoodContext);
  if (!context) {
    throw new Error('useMood must be used within a MoodProvider');
  }
  return context;
};

export default MoodContext;