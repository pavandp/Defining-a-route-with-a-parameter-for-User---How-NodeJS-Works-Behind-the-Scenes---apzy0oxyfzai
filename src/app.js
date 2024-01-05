const express = require('express');
const app = express();

app.get('/user/:userId', (req, res) => {
  // Extract userId from route parameters
  const userId = req.params.userId;

  // Check if userId is provided
  if (!userId) {
    return res.status(400).json({ error: 'userId is required' });
  }

  // Check if userId is a valid number (you might have different validation logic based on your requirements)
  if (isNaN(userId)) {
    return res.status(400).json({ error: 'Invalid userId' });
  }

  // Return the expected output
  res.status(200).json({ userId });
});

module.exports = app;