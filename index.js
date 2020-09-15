const express = require('express');
const app = express();
const path = require('path');
const moment = require('moment');

const PORT = process.env.PORT || 5000;
const members = require('./members.js')

// Define middleware
const logger = (req, resp, next) => {
  console.log(`${moment().format()}: ${req.protocol}://${req.get('host')}${req.originalUrl}`)
  next()
}

// Init logger middleware
app.use(logger);


// Set a static folder
// app.use(express.static(path.join(__dirname, 'public')));

// Gets all members
app.get('/api/members', (req, resp) => {
  resp.json(members); 
})
 
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
