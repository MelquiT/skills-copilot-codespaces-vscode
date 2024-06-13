// Create web server
const express = require('express');
const app = express();

// Create a route to handle GET requests to the root URL
app.get('/', (req, res) => {
  res.send('Welcome to the jungle!');
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
