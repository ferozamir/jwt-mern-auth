const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/auth');

router.get('/profile', checkAuth, (req, res) => {
  try {
    res.status(200).json({ message: 'You are authenticated', user: req.userData });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while accessing the profile' });
  }
});

module.exports = router;
