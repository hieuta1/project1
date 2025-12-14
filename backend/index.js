const express = require("express");
const cors = require("cors");

const app = express();

// ✅ BẬT CORS
app.use(cors());

app.get("/", (req, res) => {
  res.send("Backend Project1 OK 🚀");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
