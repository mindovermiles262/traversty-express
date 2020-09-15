const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 5000;
const members = [
  { "id": 1, "name": "John", "email": "john@example.com", "status": "active" },
  { "id": 2, "name": "Bob", "email": "bob@example.com", "status": "inactive" },
  { "id": 3, "name": "Sue", "email": "sue@example.com", "status": "active" }
];

// Set a static folder
// app.use(express.static(path.join(__dirname, 'public')));

// Gets all members
app.get('/api/members', (req, resp) => {
  resp.json(members); 
})
 
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
