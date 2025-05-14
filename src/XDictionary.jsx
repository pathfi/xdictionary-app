import React, { useState } from 'react';

function XDictionary() {
  const [dictionary] = useState([
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [definition, setDefinition] = useState('');
  const [found, setFound] = useState(null); // null: no search yet, true: found, false: not found

  const handleSearch = () => {
    if (!searchTerm.trim()) {
      setFound(false);
      setDefinition('');
      return;
    }

    const result = dictionary.find(
      item => item.word.toLowerCase() === searchTerm.trim().toLowerCase()
    );

    if (result) {
      setDefinition(result.meaning);
      setFound(true);
    } else {
      setDefinition('');
      setFound(false);
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Dictionary App</h1>
      <input
        type="text"
        placeholder="Search for a word"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginRight: '10px', padding: '5px' }}
      />
      <button onClick={handleSearch}>Search</button>

      <div style={{ marginTop: '20px' }}>
        <h3>Definition:</h3>
        {found === true && <p>{definition}</p>}
        {found === false && <p>Word not found in the dictionary.</p>}
        {found === null && <p>Please enter a word and click search.</p>}
      </div>
    </div>
  );
}

export default XDictionary;
