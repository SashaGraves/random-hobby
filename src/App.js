import './App.css';
import {useEffect, useState} from 'react';
import {FlipCard} from './FlipCard'
import {hobbies as hobbiesConstant} from './constants'

function App() {
  const [randomHobbies, setRandomHobbies] = useState([])

  useEffect(() => {
    const randomizedHobbies = Object.keys(hobbiesConstant)
      .map(value => ( [value, Math.random()] ))
      .sort((a, b) => a[1] - b[1])
      
      setRandomHobbies(randomizedHobbies)
  }, [])
  
  return (
    <div>
      <div className="App">
      <h1 className="App-title">Choose random hobby</h1>
        <div className="App-content h-full">
          {randomHobbies.map(hobby => ( <FlipCard key={hobby[0]} text={hobby[0]} isFlippedInitial={hobbiesConstant[hobby[0]]}/> ))}
        </div>
      </div>
    </div>
  );
}

export default App;
