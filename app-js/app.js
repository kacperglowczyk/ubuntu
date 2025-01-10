const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_URL || 'mongodb://mongodb:27017/myapp';

// MongoDB Connection
mongoose.connect(MONGO_URL)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));

// Message Schema
const messageSchema = new mongoose.Schema({
    text: String
});

const Message = mongoose.model('Message', messageSchema);

app.use(express.static('public'));

// API Route to get message
app.get('/api/message', async (req, res) => {
    try {
        const message = await Message.findOne();
        res.json(message || { text: 'No message found' });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});