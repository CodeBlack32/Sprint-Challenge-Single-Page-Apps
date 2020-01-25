import React, { useState, useEffect } from "react";
import axios from "axios";

const Character = props => {
  const [character, setCharacter] = useState();

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/`)
      .then(response => {
        setCharacter(response.data.results);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  if (!character) {
    return <div>Loading Character...</div>;
  }

  const { name, species, status } = character;
  return (
    <div className="character-card">
      <h2>{name}</h2>
      <div className="character-species">
        Species: <em>{species}</em>
      </div>
      <div className="character-status">
        Status: <strong>{status}</strong>
      </div>
    </div>
  );
};
export default Character;
