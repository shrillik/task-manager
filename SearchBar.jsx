import React from "react";

function SearchBar({ searchTerm, setSearchTerm }) {
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <input
      type="text"
      className="search-bar"
      placeholder="Search tasks"
      value={searchTerm}
      onChange={handleSearch}
    />
  );
}

export default SearchBar;
