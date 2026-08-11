const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const config = require('./config');
const authRoutes = require('./routes/auth');

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use('/', authRoutes);

app.get('/', (req, res) => res.json({ service: 'login-service', endpoints: ['POST /login', 'POST /register'] }));

app.use((err, req, res, next) => {
  if (config.exposeStackTraces) return res.status(500).json({ error: err.message, stack: err.stack });
  res.status(500).json({ error: 'Internal Server Error' });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`login-service listening on http://localhost:${PORT}`));
