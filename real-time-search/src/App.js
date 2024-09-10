import React, { useState, useEffect } from 'react';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  // Debounce function to delay search input processing
  const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  // Function to simulate an API call with promises
  const searchApi = (query) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        // Mock API response (this can be replaced by an actual API call)
        const mockData = ['apple', 'banana', 'grape', 'orange', 'pineapple', 'mango'];
        const filteredData = mockData.filter(item => item.toLowerCase().includes(query.toLowerCase()));
        resolve(filteredData);
      }, 1000); // Simulate a 1-second delay
    });
  };

  // Debounced search handler
  const handleSearch = debounce(async (query) => {
    setIsSearching(true);
    const result = await searchApi(query);
    setResults(result);
    setIsSearching(false);
  }, 500); // 500ms debounce delay

  // Handle input change and initiate debounced search
  const handleChange = (e) => {
    const { value } = e.target;
    setSearchTerm(value);
    if (value) {
      handleSearch(value);
    } else {
      setResults([]);
    }
  };

  return (
    <div className="App">
      <h1>Real-Time Search with Debouncing</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search for fruits..."
      />
      {isSearching && <p>Searching...</p>}
      <ul>
        {results.map((result, index) => (
          <li key={index}>{result}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
