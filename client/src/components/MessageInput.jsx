import { useState } from "react";

function MessageInput({ onSend }) {
  const [username, setUsername] = useState(
  localStorage.getItem("username") || ""
);
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username.trim() || !message.trim()) return;
    localStorage.setItem("username", username);

    onSend({
      username,
      message,
    });

    setMessage("");
  };

  return (
    <form className="input-area" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="text"
        placeholder="Type a message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button type="submit" disabled={!username.trim() || !message.trim()}
      >Send
      </button>
    </form>
  );
}

export default MessageInput;