import logo from './logo.svg';
import './App.css';
import {useState} from "react";



function App() {

const [count, setCount] = useState(0);

 function increseHandler(){
  setCount(count + 1);
 }
 function descreseHandler(){
  setCount(count - 1);

 }
 function resetHandler(){
  setCount(0);
 }

  return (
    <div className='main'>
      <div className='content'>
        <div className='headdiv' >
          Increment & Decrement
        </div>

        <div className="decresediv" >
          <button onClick={descreseHandler}>
            -
          </button>
        </div>

        <div className='valuediv'>
          {count}
        </div>

        <div className='incresediv'>
          <button onClick={increseHandler}>
            +
          </button>
        </div>

        <div className='resetdiv' >
          <button className='resetbutton' onClick={resetHandler}>
            Reset
          </button>
        </div>
      </div>
    </div>

  );
}

export default App;
