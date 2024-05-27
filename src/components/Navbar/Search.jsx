import React, { useState } from 'react';

const Search = ({ searchValue, setSearchValue, onSearch }) => {
  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchValue);
  };

  return (
    <form onSubmit={handleSearch} className="flex items-center justify-center p-2">
      <input
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Search for a movie"
        className="p-2 border rounded-l outline-none"
      />
      <button
        type="submit"
        className="border hover:bg-slate-600 duration-100 text-white p-2 rounded-r"
      >
        Search
      </button>
    </form>
  );
};

export default Search;
