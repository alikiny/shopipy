import React, { useEffect, useState } from 'react';

import './App.css';

interface Product {
  id: string,
  productLine: {
    title: string,
    description: string,
    price: number
  }
}

const url = process.env.REACT_APP_URL
console.log(url)

function App() {
  const [products, setProducts] = useState<Product[]>([])
  useEffect(() => {
    url && fetch(`${url}products`).then(data => data.json()).then(data => {
      setProducts(data)
    })
  }, [])
  return (
    <div className="App">
      <h1>Learn</h1>
      {products.map((p) =>
        (<p key={p.id}>{p.productLine.title} - {p.productLine.description}</p>)
      )}
    </div>
  );
}

export default App;
