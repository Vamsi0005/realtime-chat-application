import { useEffect, useState } from "react";
import api from "../services/api";
import socket from "../services/socket";

function useChat() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetchMessages();

    socket.on("newMessage", (message) => {
      setMessages((prev) => [...prev, message]);
    });

    return () => {
      socket.off("newMessage");
    };
  }, []);

  const fetchMessages = async () => {
    try {
      const { data } = await api.get("/messages");
      setMessages(data);
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  const sendMessage = async (messageData) => {
    try {
      await api.post("/messages", messageData);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return {
    messages,
    sendMessage,
  };
}

export default useChat;