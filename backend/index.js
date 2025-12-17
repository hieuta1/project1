const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/products", (req, res) => {
  res.json([
    {
      id: 1,
      name: "Áo thun nam",
      price: 199000,
      image: "https://via.placeholder.com/300"
    },
    {
      id: 2,
      name: "Quần jean nữ",
      price: 349000,
      image: "https://via.placeholder.com/300"
    }
  ]);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
