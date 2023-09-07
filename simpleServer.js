// Import the http module
const http = require('http');

// Create the server
const server = http.createServer((req, res) => {
  // Set the response header
  res.writeHead(200, {'Content-Type': 'text/plain'});

  // Send a response to the client
  res.end('Hello, World!\\n');
});

// Start the server listening on port 3000
server.listen(3000, () => {
  console.log('Server running at <http://localhost:3000/>');
});
