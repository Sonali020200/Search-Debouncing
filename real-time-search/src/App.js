import React, { useState } from 'react';
import "./index.css";

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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-6 text-blue-600">Real-Time Search with Debouncing</h1>
      <div className="w-full max-w-md">
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder="Search for fruits..."
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 shadow-md"
        />
        {isSearching && <p className="text-gray-500 mt-2">Searching...</p>}
        <ul className="mt-4 bg-white shadow-lg rounded-lg">
          {results.map((result, index) => (
            <li
              key={index}
              className="p-3 hover:bg-gray-100 border-b last:border-none"
            >
              {result}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
