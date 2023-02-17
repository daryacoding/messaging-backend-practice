const express = require('express')
const router = express.Router()
const chatCtrl = require('../../controllers/api/chats')

// Send a message
router.post('/chats/send', chatCtrl.sendMessage)

// Retrieve messages between two users
router.get('/chats', chatCtrl.getMessages)

module.exports = router;