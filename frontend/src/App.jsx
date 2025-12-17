import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className="app">
      <header className="header">
        <h1>SHOP QUẦN ÁO ONLINE</h1>
        <p>Dữ liệu lấy từ Backend Node.js</p>
      </header>

      <section className="features">
        {products.map(p => (
          <div className="card" key={p.id}>
            <img src={p.image} alt={p.name} width="100%" />
            <h3>{p.name}</h3>
            <p>{p.price.toLocaleString()}₫</p>
          </div>
        ))}
      </section>
    </div>
  );
}

export default App;
