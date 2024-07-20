import React, { useContext, useState } from 'react';
import { PRODUCTS } from '../../products';
import { Product } from './product';
import './shop.css';
import { ShopContext } from '../../context/shop-context';
import { SearchBar } from '../../components/seachbar/SearchBar';


export const Shop = () => {
  const { searchQuery } = useContext(ShopContext);
  const [view, setView] = useState('grid'); // 'grid' or 'list'

  const filteredProducts = PRODUCTS.filter((product) =>
    product.productName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Techiie Shop</h1>
      </div>

      <SearchBar />

      <div className="view-toggle">
        <button onClick={() => setView('grid')}>Grid View</button>
        <button onClick={() => setView('list')}>List View</button>
      </div>

      <div className={`products ${view === 'list' ? 'product-list' : ''}`}>
        {filteredProducts.map((product) => (
          <Product key={product.id} data={product} view={view} />
        ))}
      </div>
    </div>
  );
};
