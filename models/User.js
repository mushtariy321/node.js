const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    surname: { type: String, required: true },
    email: { type: String, required: true },     // email qo'shildi
    address: { type: String, required: true }    // address qo'shildi
});

module.exports = mongoose.model('User', UserSchema);
