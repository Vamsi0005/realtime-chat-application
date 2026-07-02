import { useEffect, useRef } from "react";
import MessageBubble from "./MessageBubble";

function MessageList({ messages }) {
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  if (messages.length === 0) {
    return <div className="empty-chat">No messages yet.</div>;
  }

  return (
    <div className="message-list">
      {messages.map((message) => (
        <MessageBubble
          key={message._id}
          message={message}
        />
      ))}

      <div ref={bottomRef}></div>
    </div>
  );
}

export default MessageList;