import React, { useState } from "react";

const AutoSuggestFunction = ({ suggestions }) => {
  const [inputValue, setInputValue] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const handleInputChange = (event) => {
    console.log(inputValue);
    const value = event.target.value;
    setInputValue(value);
    const filtered = suggestions.filter((suggestion) =>
      suggestion.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredSuggestions(filtered);
  };
  return (
    <div >
      <input style={{alignItems:"center",marginLeft:"5%" }}
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type here..."
      />

      <ul>
        {inputValue === "" ? (
          <h2 style={{alignItems:"center", marginLeft:"15%"}}>Type to Search</h2>
        ) : (
          filteredSuggestions.map((suggestion, index) => (
            <li key={index}>{suggestion}</li>
          ))
        )}
      </ul>
    </div>
  );
};

export default AutoSuggestFunction;
