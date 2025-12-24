📝 Full-Stack Todo Application
A modern, responsive Todo application built with React and Node.js/Express. This project demonstrates full-stack development skills including RESTful API design, state management, and responsive UI design.

React
Node.js
Express.js
TailwindCSS
Vite

🌐 Live Demo
Frontend: [Your Frontend URL]
Backend API: https://todo-backend-production-cbc0.up.railway.app/api/todos
✨ Features
✅ Create new todos
📖 Read and display all todos
🔄 Update todo completion status
🗑️ Delete todos
⌨️ Keyboard support - Press Enter to add todos
📱 Fully responsive design for all screen sizes
🎨 Clean, modern UI with Tailwind CSS
🛠️ Tech Stack
Frontend
Technology	Purpose
React 18	UI Library
Vite	Build Tool & Dev Server
Tailwind CSS	Styling
Axios	HTTP Client
UUID	Unique ID Generation
Backend
Technology	Purpose
Node.js	Runtime Environment
Express.js	Web Framework
Railway	Deployment Platform

📁 Project Structure
text

todo-app/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   └── Navbar.jsx
│   │   ├── assets/
│   │   │   └── react.svg
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   ├── public/
│   │   └── vite.svg
│   ├── package.json
│   └── vite.config.js
│
└── backend/
    ├── server.js
    ├── routes/
    │   └── todos.js
    ├── package.json
    └── ...

🔌 API Endpoints
Method	Endpoint	Description
GET	/api/todos	Fetch all todos
POST	/api/todos	Create a new todo
PUT	/api/todos/:id	Toggle todo completion
DELETE	/api/todos/:id	Delete a todo