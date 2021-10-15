import './App.css';
import {React,useState,useEffect} from 'react';
import {randomLanguage} from './components/words.js';

function App() {
  const [randomValue,setRandomValue]=useState('0');
  const [space,setSpace]=useState('_');
  const [guessWord,setguessWord]=useState("true");
  useEffect(async() => {
await  setRandomValue(randomLanguage());
  }, [])
  const setWord=()=>{
    // alert(randomValue)
return randomValue.split('').map((a)=>"_");
//  setguessWord(false);
  }
  return (
    <div>
     <h1 className="text-center">Hangman</h1>
      <div>
      {
  randomValue
  }
      </div>
      <div>
        {
(guessWord)?setWord():"_"
}
      </div>
    </div>
  );
}

export default App;
