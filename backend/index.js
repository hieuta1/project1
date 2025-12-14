const express = require("express");
const cors = require("cors");

const app = express();
<<<<<<< HEAD
app.use(cors());
app.use(express.json());
=======
>>>>>>> 7afeacb (Force root route and test route)

app.use(cors());
app.use(express.json());

// ✅ ROUTE ROOT
app.get("/", (req, res) => {
  res.send("Backend Project1 OK 🚀");
});

<<<<<<< HEAD
=======
// ✅ ROUTE TEST
app.get("/test", (req, res) => {
  res.send("TEST OK");
});

>>>>>>> 7afeacb (Force root route and test route)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
