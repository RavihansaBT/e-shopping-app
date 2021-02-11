require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db.js')
const productRouta = require('./routes/productRouts');

connectDB();

const app = express();
app.use(express.json());

app.use('/api/products', productRouta)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))