import {useState,useRef} from 'react'
import Timer from './Timer';

export default function Player() {
  const name =useRef();

  const [plname,setname] =useState('');

  function handleclick(){
    setname(name.current.value);
  }
  return (
    <section id="player">
      <h2>Welcome {plname ? plname : 'unknown entity'}</h2>
      <p>
        <input ref={name} type="text"/>
        <button onClick={handleclick}>Set Name</button>
      </p>
    </section>
  );
}
