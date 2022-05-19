import React from 'react';
import { useState, useEffect } from 'react';

function TripList() {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/')
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  console.log(products);

  return (
    <div>
      <h1>Welcome to new Trips</h1>
      <label>
        <span>Search: </span>
        <input
          placeholder="Search for a trip here"
          onChange={(event) => setQuery(event.target.value)}
        />
      </label>
      <ul>
        {products
          .filter((product) => {
            if (query === '') {
              return product;
            } else if (
              product.title.toLowerCase().includes(query.toLowerCase())
            ) {
              return product;
            }
          })
          .map((product) => (
            <li key={product.id}>
              <h3>{product.title}</h3>
              <p>{product.price}</p>
              <span>{product.description}</span>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default TripList;
