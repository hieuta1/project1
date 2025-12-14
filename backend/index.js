const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// ✅ ROUTE TEST BACKEND
app.get("/", (req, res) => {
  res.send("Backend Project1 OK 🚀");
});

// (tuỳ chọn) route test DB
app.get("/api/time", async (req, res) => {
  res.json({ time: new Date() });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
