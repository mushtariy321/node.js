const express = require('express');
const cors = require('cors');
const connectDB = require('./config/databas');
const userRoutes = require('./routes/Users');
require('dotenv').config();

const ApiUrl = express();

connectDB();

ApiUrl.use(cors());
ApiUrl.use(express.json());

ApiUrl.use('/users', userRoutes);

ApiUrl.listen(5001, () => {
    console.log('API 5001-portda ishlamoqda');
});
