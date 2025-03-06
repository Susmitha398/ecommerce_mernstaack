const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// Import Routes (Fixed path)
const productRoutes = require('./routes/productRoutes');

app.use('/api/v1', productRoutes);

module.exports = app;
