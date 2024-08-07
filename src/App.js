import './App.css';
import {FlipCard} from './FlipCard'
import {hobbies} from './constants'

function App() {

  return (
    <div>
      <div className="App">
      <h1 className="App-title">Choose random hobby</h1>
        <div className="App-content h-full">
          {Object.keys(hobbies)
              .map(value => ( [value, Math.random()] ))
              .sort((a, b) => a[1] - b[1])
              .map(hobby => ( <FlipCard key={hobby[0]} text={hobby[0]} isFlippedInitial={hobbies[hobby[0]]}/> ))}
        </div>
      </div>
    </div>
  );
}

export default App;
