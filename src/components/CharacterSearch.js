
import React, { useState } from 'react';

// Kullanıcının girdiği metni tutmak için state kullanıyoruz.
const CharacterSearch = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        onSearch(searchTerm);
    };

    // Klavye üzerinden "Enter" tuşuna basılınca arama işlemi yapma özelliği eklendi

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div className="mb-4">
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={handleKeyDown}
                className="border p-2 mr-2"
                placeholder="Search characters..."
            />
            <button
                onClick={handleSearch}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
                Search
            </button>
        </div>
    );
};

export default CharacterSearch;
