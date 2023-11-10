// pages/index.js
import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <h1>Rick and Morty Characters</h1>
      <ul>
        <li>
          <Link href="/characters/1">Rick Sanchez</Link>
        </li>
        <li>
          <Link href="/characters/2">Morty Smith</Link>
        </li>
        {/* Diğer karakter bağlantılarını ekleyebilirsiniz */}
      </ul>
    </div>
  );
};

export default Home;
