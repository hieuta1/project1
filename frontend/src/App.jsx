import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("Đang gọi backend...");

  useEffect(() => {
    fetch("http://localhost:3000")
      .then(res => res.text())
      .then(data => setMessage(data))
      .catch(() => setMessage("Không kết nối được backend"));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Frontend Project 1</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
