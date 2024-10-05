const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // Parol va ma'lumotlar bazasini to'g'ri qo'yish
        await mongoose.connect('mongodb+srv://mushtariy:mushtariydo@cluster0.sgdex.mongodb.net/YOUR_DATABASE_NAME?retryWrites=true&w=majority');
        console.log('MongoDB connected');
    } catch (err) {
        console.error('MongoDB connection failed:', err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
