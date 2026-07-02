import ChatHeader from "./ChatHeader";
import MessageInput from "./MessageInput";
import MessageList from "./MessageList";

function ChatWindow({ messages, onSend }) {
  return (
    <div className="chat-container">

      <ChatHeader />

      <MessageList messages={messages} />

      <MessageInput onSend={onSend} />

    </div>
  );
}

export default ChatWindow;