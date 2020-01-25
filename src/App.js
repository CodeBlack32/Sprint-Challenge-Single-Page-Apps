import React from "react";
import Header from "./components/Header.js";
import Character from "./components/Character.js";
import CharacterList from "./components/CharacterList.js";
import { Route } from "react-router-dom";

export default function App() {
  return (
    <main>
      <Header />
      <CharacterList />

      <Route exact path="/" CharacterList={CharacterList} />
      <Route
        path="/CharacterList/:id"
        render={props => <Character {...props} />}
      />
    </main>
  );
}
