require('dotenv').config();
const express = require('express');
const connectDB = require('./db');


const app = express();
const PORT = process.env.PORT || 3000;

// Connect to DB
connectDB();

// Middleware
app.use(express.json());

// Simple API
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from your Node.js app!' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

