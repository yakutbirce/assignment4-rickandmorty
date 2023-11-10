// pages/index.js
import React, { useState, useEffect } from 'react';
import CharacterSearch from '../components/CharacterSearch';
import CharacterCard from '../components/CharacterCard';

export default function Home() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filteredCharacters, setFilteredCharacters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/characters');
        const data = await response.json();
        setCharacters(data.results);
        setFilteredCharacters(data.results);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (searchTerm) => {
    const filtered = characters.filter(character => character.name.toLowerCase().includes(searchTerm.toLowerCase()));
    setFilteredCharacters(filtered);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Rick and Morty Characters</h1>
      <CharacterSearch onSearch={handleSearch} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredCharacters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
}
