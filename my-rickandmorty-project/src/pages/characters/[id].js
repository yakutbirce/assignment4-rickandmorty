// pages/characters/[id].js
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

const CharacterDetail = () => {
    const router = useRouter();
    const { id } = router.query;

    const [character, setCharacter] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCharacterDetail = async () => {
            try {
                // Simüle edilmiş bir API isteği yapabilirsiniz, örneğin:
                const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
                const data = await response.json();
                setCharacter(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching character detail:', error);
                setLoading(false);
            }
        };

        if (id) {
            fetchCharacterDetail();
        }
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (!character) return <div>Character not found</div>;

    return (
        <div>
            <h1>{character.name}</h1>
            <p>Status: {character.status}</p>
            <p>Species: {character.species}</p>
            {/* Diğer karakter özelliklerini ekleyebilirsiniz */}
        </div>
    );
};

export default CharacterDetail;
