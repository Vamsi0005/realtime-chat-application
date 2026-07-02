# 💬 Real-Time Chat Application

A full-stack real-time chat application built using **React**, **Node.js**, **Express**, **Socket.io**, and **MongoDB**. This application enables users to exchange messages instantly using WebSockets while maintaining chat history in MongoDB.

---

## 🚀 Features

- ⚡ Real-time messaging using Socket.io
- 💬 Send and receive messages instantly
- 🗂️ Persistent chat history with MongoDB
- 🕒 Display message timestamps
- 📱 Responsive and clean user interface
- 🔄 REST APIs for sending and retrieving messages
- ⚙️ Modular backend architecture
- 🛡️ Basic API error handling

---

## 🛠️ Tech Stack

### Frontend
- React (Vite)
- Axios
- Socket.io Client
- CSS3

### Backend
- Node.js
- Express.js
- Socket.io
- MongoDB
- Mongoose
- dotenv
- CORS

---

## 📂 Project Structure

```
realtime-chat-application/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── services/
│   │   ├── styles/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── socket/
│   ├── app.js
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── .gitignore
└── README.md
```

---

# 📌 Prerequisites

Before running the project, make sure you have installed:

- Node.js (v18 or later)
- MongoDB Community Server
- Git

---

# ⚙️ Backend Setup

Navigate to the backend folder.

```bash
cd server
```

Install dependencies.

```bash
npm install
```

Create a `.env` file inside the `server` folder.

```env
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/chat-app
```

Start the backend server.

```bash
npm run dev
```

The backend will start on:

```
http://localhost:5000
```

---

# ⚙️ Frontend Setup

Navigate to the frontend folder.

```bash
cd client
```

Install dependencies.

```bash
npm install
```

Start the React application.

```bash
npm run dev
```

The frontend will start on:

```
http://localhost:5173
```

---

# 📡 REST API Endpoints

## Get Chat History

```http
GET /api/messages
```

Returns all chat messages sorted by creation time.

---

## Send Message

```http
POST /api/messages
```

Request Body

```json
{
  "username": "Vamsi",
  "message": "Hello Recruiter!"
}
```

---

# 🔌 Socket.io Events

### Client → Server

| Event | Description |
|--------|-------------|
| connection | User connects to the server |
| disconnect | User disconnects from the server |

### Server → Client

| Event | Description |
|--------|-------------|
| newMessage | Broadcasts newly created messages to all connected users |

---

# 🗄️ Database Schema

```javascript
{
    username: String,
    message: String,
    createdAt: Date,
    updatedAt: Date
}
```

---

# 🏗️ Architecture

```
React
   │
Axios + Socket.io Client
   │
Node.js + Express
   │
Socket.io
   │
MongoDB
```

---

# 🎯 Design Decisions

- Socket.io is used to provide real-time communication between connected clients.
- MongoDB stores chat messages to ensure persistence after page refresh.
- REST APIs are responsible for fetching chat history and creating new messages.
- Socket.io broadcasts newly created messages to every connected client.
- The project follows a modular folder structure to improve readability and maintainability.

---

# 📌 Assumptions

- All users communicate in a single shared chat room.
- User authentication is not implemented.
- Users manually enter their username before sending messages.
- MongoDB is running locally.

---

# 🔮 Future Enhancements

- User authentication (JWT)
- Typing indicator
- Online/offline user status
- Read receipts
- Multiple chat rooms
- Image and file sharing
- Emoji support
- Message search

---

# 📷 Screenshots

> Add screenshots of your application here.

Example:

```
screenshots/
    home.png
    chat.png
```

---

# 👨‍💻 Author

**Vamsi**

GitHub: https://github.com/Vamsi0005

---

# 📄 License

This project was developed as part of a technical assessment and is intended for educational and evaluation purposes.