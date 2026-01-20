const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Root route (homepage)
app.get("/", (req, res) => {
  res.send("🚀 Delivery Tracking App is LIVE!");
});

// Example test route
app.get("/test", (req, res) => {
  res.send({ status: "success", message: "API is working!" });
});

// Listen on the port Render provides
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
