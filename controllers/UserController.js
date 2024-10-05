const User = require('../models/User');

// Yangi foydalanuvchini yaratish (POST)
const createUser = async (req, res) => {
    const { name, age, surname, email, address } = req.body;

    // Agar kerakli ma'lumotlar bo'lmasa, xato qaytariladi
    if (!name || !age || !surname || !email || !address) {
        return res.status(400).json({ message: 'Xato so\'rov: Ma\'lumotlar yetarli emas' });
    }

    try {
        const newUser = new User({ name, age, surname, email, address });
        await newUser.save();
        res.json({ data: newUser });
    } catch (err) {
        res.status(500).json({ message: 'Server xatosi' });
    }
};

// Barcha foydalanuvchilarni olish (GET)
const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json({ data: users });
    } catch (err) {
        res.status(500).json({ message: 'Server xatosi' });
    }
};

// Foydalanuvchini yangilash (PUT)
const updateUser = async (req, res) => {
    const { id } = req.params;
    const { name, age, surname, email, address } = req.body;

    // Agar kerakli ma'lumotlar bo'lmasa, xato qaytariladi
    if (!name || !age || !surname || !email || !address) {
        return res.status(400).json({ message: 'Xato so\'rov: Ma\'lumotlar yetarli emas' });
    }

    try {
        const updatedUser = await User.findByIdAndUpdate(id, { name, age, surname, email, address }, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ message: 'Foydalanuvchi topilmadi' });
        }
        res.json({ data: updatedUser });
    } catch (err) {
        res.status(500).json({ message: 'Server xatosi' });
    }
};

// Foydalanuvchini o'chirish (DELETE)
const deleteUser = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedUser = await User.findByIdAndDelete(id);
        if (!deletedUser) {
            return res.status(404).json({ message: 'Foydalanuvchi topilmadi' });
        }
        res.json({ message: 'Foydalanuvchi o\'chirildi' });
    } catch (err) {
        res.status(500).json({ message: 'Server xatosi' });
    }
};

module.exports = { createUser, getUsers, updateUser, deleteUser };
