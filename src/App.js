import './App.css';
import {FlipCard} from './FlipCard'
import {hobbies} from './constants'

function App() {

  return (
    <div>
      <div className="App">
      <h1 className="App-title">Choose random hobby</h1>
        <div className="App-content h-full">
          {hobbies.map(hobby => (
            <FlipCard key={hobby} text={hobby} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
