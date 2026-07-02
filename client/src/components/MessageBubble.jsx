function MessageBubble({ message }) {
  const currentUser = localStorage.getItem("username");

  const isMe = message.username === currentUser;

  return (
    <div className={`message-row ${isMe ? "me" : "other"}`}>
      <div className={`message-card ${isMe ? "my-message" : ""}`}>
        <div className="message-header">
          <strong>{message.username}</strong>

          <span>
            {new Date(message.createdAt).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </span>
        </div>

        <div className="message-text">
          {message.message}
        </div>
      </div>
    </div>
  );
}

export default MessageBubble;