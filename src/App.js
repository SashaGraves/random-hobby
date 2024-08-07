import './App.css';
import {useEffect, useState} from 'react';
import {FlipCard} from './FlipCard'
import {hobbies as hobbiesConstant} from './constants'

function App() {
  
  const [someState, setSomeState] = useState(false)
  const [hobbies, setHobbies] = useState([])

  useEffect(() => {
    const randomizedHobbies = Object.keys(hobbiesConstant)
      .map(value => ( [value, Math.random()] ))
      .sort((a, b) => a[1] - b[1])
      
      setHobbies(randomizedHobbies)
  }, [])
  
  const toggleButton = () => {
    setSomeState(prevState => !prevState);
  }
  
  return (
    <div>
      <div className="App">
      <h1 className="App-title">Choose random hobby</h1>
      <button className='mt-2 mb-4 mx-auto rounded-sm	border-2 text-white	border-dashed border-lime-500 hover:border-lime-200 w-fit p-2 ' onClick={toggleButton}>{someState ? 'Hey sweetie!' : 'Touch me <3'}</button>
        <div className="App-content h-full">
          {hobbies.map(hobby => ( <FlipCard key={hobby[0]} text={hobby[0]} isFlippedInitial={hobbiesConstant[hobby[0]]}/> ))}
        </div>
      </div>
    </div>
  );
}

export default App;
