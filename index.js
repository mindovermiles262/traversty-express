const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 5000;
const logger = require('./middleware/logger.js');
const members = require('./members.js');

const app = express();

// Init logger middleware
app.use(logger);

// Set a static folder
// app.use(express.static(path.join(__dirname, 'public')));

// Gets all members
app.get('/api/members', (req, resp) => {
  resp.json(members);
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
