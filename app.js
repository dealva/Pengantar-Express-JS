const express = require('express');
const app = express();
const logRequest = require('./middleware');
const usersRoute = require('./routes/users');

// Middleware
app.use(logRequest);

// Routes
app.use('/users', usersRoute);

// Redirect all unmatched GET routes to /users
app.use((req, res) => {
  res.redirect('/users');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});