import React from "react";

function DogSummary( {targetPup, setPups} ) {
  const { id, name, isGoodDog, image } = targetPup

  function toggleGood() {
    fetch(`http://localhost:3001/pups/${id}`, {
      method: "PATCH",
      headers: {"Content-type": "application/json"},
      body: JSON.stringify( {isGoodDog: !isGoodDog} )
    })
    fetch("http://localhost:3001/pups")
      .then(r => r.json())
      .then(data => setPups(data))
  }

  return (
      <div id="dog-summary-container">
        <h1>DOGGO:</h1>
        <div id="dog-info">
          <img src={image} alt={name}/>
          <h2>{name}</h2>
          {targetPup === {} ? null : <button onClick={toggleGood}>{isGoodDog ? "Good Dog!" : "Bad Dog!"}</button>}
        </div>
      </div>
  );
}

export default DogSummary;