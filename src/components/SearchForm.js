import React, { useState, useEffect } from "react";
import axios from "axios";

export default function SearchForm() {
  const [search, setSearch] = useState("");
  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character`)
      .then(response => {
        const SearchInfo = response.data.results;
        console.log(SearchInfo);
      })
      .catch(error => {
        console.error(error);
      });

    const searchResults = SearchInfo.filter(CharacterData =>
      CharacterData.includes(search)
    );
    setSearchData(searchResults);
  }, [search]);

  const searchChange = e => {
    e.preventDefault();
    setSearch(e.target.value);
  };
  return (
    <section className="search-form">
      <h1>Seach Here...</h1>
      <input
        type="text"
        placeholder="Enter you search request!"
        onChange={searchChange}
        value={search}
      />
      {searchData.map(CharacterData => (
        <div key={CharacterData}>{CharacterData}</div>
      ))}
    </section>
  );
}
