import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const CharacterList = props => {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    const getCharacters = () => {
      axios
        .get(`https://rickandmortyapi.com/api/character`)
        .then(response => {
          setCharacters(response.data.results);
        })
        .catch(error => {
          console.error(error);
        });
    };
    getCharacters();
  }, []);

  return (
    <div className="character-list">
      {characters.map(character => (
        <CharacterDetails key={character.id} character={character} />
      ))}
    </div>
  );
};

function CharacterDetails({ character }) {
  const { name, species, status } = character;
  return (
    <Link to={`/CharacterList/${character.id}`} className="character-card">
      <h2>{name}</h2>
      <div className="character-species">
        Species: <em>{species}</em>
      </div>
      <div className="character-status">
        Status: <strong>{status}</strong>
      </div>
    </Link>
  );
}

export default CharacterList;
