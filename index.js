const express = require('express');
const app = express();
const path = require('path');

// Define middleware
const logger = (req, resp, next) => {
  console.log("Logger Middleware")
  console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}`)
  next
}

// Init logger middleware
app.use(logger);

const PORT = process.env.PORT || 5000;
const members = require('./members.js')

// Set a static folder
// app.use(express.static(path.join(__dirname, 'public')));

// Gets all members
app.get('/api/members', (req, resp) => {
  resp.json(members); 
})
 
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
