const Chat = require('../../models/chat')

exports.sendMessage = async (req, res) => {
    try {
        const {sender, receiver, message} = req.body;
        const newMessage = new Chat({ sender, receiver, message });
        await newMessage.save();
        res.status(201).json(({ message: 'Message sent successfully '}))
    } catch (err) {
        res.status(500).json({ error: 'Failed to send message' })
    }
};

exports.getMessage = async (req, res) => {
    try {
        const {sender, receiver } = req.query;
        const messages = await Chat.find({
            $or: [
                { $and: [{ sender }, { receiver }] },
                { $and: [{ sender: receiver }, { receiver: sender }] }
            ]
        }).sort({ createdAt: 'asc' });
        res.status(200).json({ messages });
    } catch (err) {
        res.status(500).json({ error: 'Failed to retrieve messages' })
    }
}