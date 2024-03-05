import React, { useEffect, useState } from 'react';
import './App.css';

function Pokemon() {
    const [pokemonData, setPokemonData] = useState([]);

    const fetchPokemon = () => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=100000")
            .then(response => response.json())
            .then(data => setPokemonData(data['results']))
            .catch(error => console.error('Error fetching pokemon:', error));
    }

    // Fetch data on component mount
    useEffect(() => {
        fetchPokemon();
    }, []);

    return (
        <div>
            <ul>
                {pokemonData.map((pokemon, index) => (
                    <li key={index}>{pokemon.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default Pokemon;
