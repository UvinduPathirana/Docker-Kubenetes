// app.js
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Middleware to serve static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Basic route to handle home page request
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// 404 Error handler for unknown routes
app.use((req, res, next) => {
  res.status(404).send('Sorry, page not found!');
});

// Error handler middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
