import React, { useState, useEffect, useCallback } from "react";
import pokemons from "./pokemons";

export default function PokeNameValidator() {
  const [pokemonName, setPokemonName] = useState();

  const handleChange = (e) => {
    if (e.target.value.toLowerCase() === pokemonName.toLowerCase()) {
      alert("Correct! Play again?");
      setRandomName();
      e.target.value = "";
    }
  };

  const setRandomName = useCallback(() => {
    setPokemonName(pokemons[Math.floor(Math.random() * (pokemons.length - 1))]);
  }, []);

  useEffect(() => {
    setRandomName();
  }, [setRandomName]);

  return (
    <div className="app">
      <h2>Mini Challenge 4: Poke Name Validator</h2>
      <p>
        Pokémon name:&nbsp;
        <strong>{pokemonName}</strong>
      </p>
      <p className="secondary">Type the Pokémon name correctly:</p>
      <input
        type="text"
        onKeyUp={handleChange}
        placeholder="Enter the Pokémon name"
      />
    </div>
  );
}
