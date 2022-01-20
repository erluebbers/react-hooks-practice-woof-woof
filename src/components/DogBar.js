import React from "react";

function DogBar( {pups, setTargetPup} ) {

  const displayPups = pups.map(pup => {
    return <span onClick={() => setTargetPup(pup)} key={pup.id}>{pup.name}</span>
  })

  return (
    <div id="dog-bar">
      {displayPups}
    </div>
  );
}

export default DogBar;