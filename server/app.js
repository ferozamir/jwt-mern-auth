const express = require('express');
const cors = require('cors');  // Import the cors middleware
// const db = require('./db');
require('dotenv').config();
const authRoutes = require('./src/components/auth/auth.route');

const app = express();
const PORT = process.env.PORT || 5000;

// Use the cors middleware
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}));
app.use(cors());

app.use(express.json());

// Use the authentication routes
app.use('/auth', authRoutes);

app.get('/', function (req, res) {
    return res.json('Hello World ⚡️');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});