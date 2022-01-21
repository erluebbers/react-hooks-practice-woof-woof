import React, { useEffect, useState } from "react";
import Filter from "./Filter"
import DogBar from "./DogBar"
import DogSummary from "./DogSummary"

function App() {
  const [pups, setPups] = useState([])
  const [targetPup, setTargetPup] = useState({})

  function handleClick(data) {
    console.log(data)
    setPups(data)
    console.log(pups)
  }

  useEffect(() => {
    fetch("http://localhost:3001/pups")
      .then(r => r.json())
      .then(data => setPups(data))
  }, [])

  return (
    <div className="App">
      <Filter />
      <DogBar pups={pups} setTargetPup={setTargetPup}/>
      <DogSummary targetPup={targetPup} handleClick={handleClick}/>
    </div>
  );
}

export default App;
