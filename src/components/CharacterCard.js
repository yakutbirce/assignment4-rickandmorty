
import React from 'react';

// filteredCharacters ile map döndüğümüz Card'ı ayrı bir component haline getirin.


// Karakter kartlarını göstermek için ayrı bir bileşen oluşturuyoruz.
const CharacterCard = ({ character }) => {
    return (
        <div className="max-w-xs mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-6">
            <img className="w-full h-48 object-cover" src={character.image} alt={character.name} />
            <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{character.name}</h2>
                <p className="text-gray-700">{character.species}</p>
            </div>
        </div>
    );
};

export default CharacterCard;
