import React from 'react';
import next from './img/next.png';

//When we create a component function,
// it needs to start with a capital letter

function PokeList({item}) {
    return (
        <ul className="items-list">
            <li className="item">
                        <div className="item-container">

                            <figure className="item-img" alt="Pokemon Image">
                                <img src={item.image} />
                            </figure> 

                            <div className="item-name">
                                <h1>{item.name}</h1>
                                <p>{item.type}</p>
                            </div>
                            
                            <button id="" className="button-select">
                                <img className ="next" src={next} alt="" /> 
                            </button>
                        </div>
            </li>
        </ul>
    )
}

const pokemonList = {
    name: 'charmeleon',
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png',
    type: 'fire'
}

export {pokemonList, PokeList}