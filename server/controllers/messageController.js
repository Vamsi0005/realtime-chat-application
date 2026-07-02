import Message from "../models/Message.js";

// GET /api/messages
export const getMessages = async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: 1 });

    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// POST /api/messages
export const sendMessage = async (req, res) => {
  try {
    const { username, message } = req.body;

    if (!username || !message) {
      return res.status(400).json({
        success: false,
        message: "Username and message are required",
      });
    }

    const newMessage = await Message.create({
      username,
      message,
    });

    // Get Socket.io instance
    const io = req.app.get("io");

    // Broadcast to all connected clients
    io.emit("newMessage", newMessage);

    res.status(201).json(newMessage);

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};