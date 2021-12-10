import './main.scss';
import React from "react";
import {pokemonList, PokeList } from "./components/pokeList";


export function App() {
  return (
    <>
      <h1>Hey</h1>

      <PokeList 
      item={pokemonList}
      />
      
    </>
  )
}


