import React, { useState, useEffect } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Main from "../src/pages/Main/Main";
import Character from "../src/pages/Character/Character";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [charID, setCharacter] = useState(null);
  console.log(charID);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => setCharacters(data.results));
  }, []);

  return (
    <div className="App">
      <Header></Header>
      {charID ? (
        <Character
          character={characters.find((e) => e.id === charID)}
          setCharacter={setCharacter}
        ></Character>
      ) : (
        <Main characters={characters} setCharacter={setCharacter}></Main>
      )}
    </div>
  );
};

export default App;
