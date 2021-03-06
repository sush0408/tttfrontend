// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
//const bodyParser = require('body-parser');
console.log("i am here1");
// Get our API routes
const api = require('./server/routes/api');

const app = express();

// Parsers for POST data
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: false }));
console.log("i am here2");
// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Set our api routes
app.use('/api', api);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
//const port = process.env.PORT || '5000';
//app.set('port', port);
app.set('port', (process.env.PORT || 5000))
/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(app.get('port'), () => console.log(`API running on localhost:${app.get('port')}`));