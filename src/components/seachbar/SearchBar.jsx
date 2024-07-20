import React, { useContext } from 'react';
import { ShopContext } from '../../context/shop-context';
import './searchbar.css';

export const SearchBar = () => {
  const { searchQuery, setSearchQuery } = useContext(ShopContext);

  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search for products..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
};
