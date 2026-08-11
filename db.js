const sqlite3 = require('sqlite3').verbose();
const config = require('./config');
const db = new sqlite3.Database(config.db.file);

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE,
    password TEXT,
    role TEXT DEFAULT 'user'
  )`);
  // VULN: plaintext passwords
  db.run(`INSERT OR IGNORE INTO users (id, username, password, role) VALUES
    (1, 'admin', 'AdminPass123!', 'admin'),
    (2, 'alice', 'alicepw', 'user'),
    (3, 'bob', 'bobpw', 'user')`);
});

module.exports = db;
