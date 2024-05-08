import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'http://20.244.56.144/test/companies/AMZ/categories/Laptop/products?top=10&minPrice=1&maxPrice=10000'
      );

      setProducts(result.data);
    };

    fetchData();
  }, []);

  return (
    <ul>
      {products.map(product => (
        <li key={product.productName}>
          {product.productName} - {product.price}
        </li>
      ))}
    </ul>
  );
}

export default Products;