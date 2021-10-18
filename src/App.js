import './App.css';
import {React,useState,useEffect} from 'react';
import {randomLanguage} from './components/words.js';
import step0 from "./components/images/0.jpg";
import step1 from "./components/images/1.jpg";
import step2 from "./components/images/2.jpg";
import step3 from "./components/images/3.jpg";
import step4 from "./components/images/4.jpg";
import step5 from "./components/images/5.jpg";
import step6 from "./components/images/6.jpg";
function App() {
  const [randomValue,setRandomValue]=useState('0');
  const [space,setSpace]=useState('_');
  const [guessWord,setguessWord]=useState("true");
  const [wrong,setWrong]=useState(0);
  const [images,setImages]=useState([step0,step1,step2,step3,step4,step5,step6]);
  useEffect(async() => {
await  setRandomValue(randomLanguage());
  }, [])
  const setWord=()=>{
    // alert(randomValue)
return randomValue.split('').map((a)=>"_");
//  setguessWord(false);
  }
  return (
    <div  className="text-center">
     <h1 className="text-center">Hangman</h1>
      <div>
      {
  randomValue
  }
      </div>
      <div>
        <p>Wrong Gusses: {wrong} of 6</p>
      </div>
      <div>
        <img src={images[0]} alt=""/>
      </div>
      <div>
        {
(guessWord)?setWord():"_"
}
      </div>
      <div>
       { "abcdefghijklmnopqrstuvwxyz".split("").map((value)=>(
          <button className="btn btn-large btn-primary m-3" name={value}>{value}</button>
        ))}

      </div>
    </div>
  );
}

export default App;
