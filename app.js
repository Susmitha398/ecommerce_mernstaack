const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// Import Routes (Fixed path)
const productRoutes = require('./routes/productRoutes');

app.use('/api/v1', productRoutes);const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});
app.use(express.json());

app.use((req, res, next) => {
  logger.info(`Request: ${req.method} ${req.url}`);
  next();
});

app.use((err, req, res, next) => {
  logger.error(err);
  res.status(500).send('Internal Server Error');
});

module.exports = app;
