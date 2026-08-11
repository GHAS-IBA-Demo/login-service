const express = require('express');
const jwt = require('jsonwebtoken');
const db = require('../db');
const config = require('../config');
const router = express.Router();

// VULN: SQL Injection - try username = admin' --
router.post('/login', (req, res) => {
  const { username, password } = req.body;
  const query = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`;
  db.get(query, (err, user) => {
    if (err) return res.status(500).json({ error: err.message, query }); // VULN: verbose error
    if (!user) return res.status(401).json({ error: 'Invalid credentials' });
    const token = jwt.sign({ id: user.id, username: user.username, role: user.role }, config.jwtSecret); // VULN: no expiry
    res.json({ token, role: user.role });
  });
});

router.post('/register', (req, res) => {
  const { username, password } = req.body;
  db.run(`INSERT INTO users (username, password) VALUES (?, ?)`, [username, password], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ id: this.lastID, username });
  });
});

module.exports = router;
