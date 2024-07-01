const express = require('express');
const router = express.Router();
const { register, login } = require('./auth.controller');
const { validateRegistration, validateLogin } = require('./auth.validation');

// Registration route
router.post('/signup', validateRegistration, register);

// Login route
router.post('/login', validateLogin, login);

module.exports = router;
