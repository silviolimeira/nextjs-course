import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/dummy-backend.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProducts(data.products);
        console.log(data.products);
      });
  }, []);

  return (
    <>
      <h1>Meu App</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
