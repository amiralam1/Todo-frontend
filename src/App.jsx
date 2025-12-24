import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
const API_URL = "https://todo-backend-production-cbc0.up.railway.app/api/todos";
function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await axios.get(API_URL);
      setTodos(response.data);
    } catch (error) {
      console.log("Error fetching todos:", error);
    }
  };

  const handleAdd = async () => {
    if (!todo.trim()) {
      return;
    }
    try {
      const newTodo = {
        id: uuidv4(),
        todo: todo,
        isCompleted: false,
      };
      const response = await axios.post(API_URL, newTodo);
      setTodos([...todos, response.data]);
      setTodo("");
    } catch (error) {
      console.log("Error adding todo:", error);
    }
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAdd();
    }
  };
  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      let newTodos = todos.filter((item) => {
        return item.id !== id;
      });
      setTodos(newTodos);
    } catch (error) {
      console.log("Error deleting the todo:", error);
    }
  };
  const handleCheckbox = async (id) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`);
      setTodos(
        todos.map((item) => {
          return item.id === id ? response.data : item;
        })
      );
    } catch (error) {
      console.log("Error updating todo:", error);
    }
  };
  return (
    <>
      <Navbar />

      <div className="adder flex justify-center my-15 px-4">
        <span className="bg-gray-200 w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 rounded-full flex justify-between">
          <input
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            value={todo}
            type="text"
            className="p-2 w-full focus:outline-none kalam-light rounded-l-full"
            placeholder="What do you need to do?"
          />
          <button
            onClick={handleAdd}
            className="bg-blue-400 rounded-e-full p-2 px-3 sm:px-4 kalam-light text-gray-800 cursor-pointer whitespace-nowrap"
          >
            Save
          </button>
        </span>
      </div>
      <section className="todoSection flex justify-center">
        <div className="todos my-5 rounded-3xl text-gray-800 bg-slate-200 w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/2 flex flex-col justify-center items-center gap-5 p-4">
          <h2 className="kalam-bold text-2xl sm:text-3xl my-3 sm:my-5">
            Your Todos
          </h2>
          {todos.length === 0 ? (
            <p className="kalam-light">No todos to display</p>
          ) : (
            todos.map((item) => {
              return (
                <div
                  key={item.id}
                  className="todo w-full kalam-light text-gray-800 flex flex-row justify-between items-center gap-2 p-2"
                >
                  <div className="flex gap-3 sm:gap-5 justify-start items-center flex-1 min-w-0">
                    <input
                      type="checkbox"
                      checked={item.isCompleted}
                      onChange={() => handleCheckbox(item.id)}
                      className="shrink-0"
                    />
                    <p
                      className={
                        item.isCompleted
                          ? "line-through  overflow-wrap"
                          : " overflow-wrap"
                      }
                    >
                      {item.todo}
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      handleDelete(item.id);
                    }}
                    className="bg-blue-400 rounded-full p-2 px-3 sm:px-4 kalam-light text-gray-800 cursor-pointer text-sm sm:text-base shrink-0"
                    type="button"
                  >
                    Delete
                  </button>
                </div>
              );
            })
          )}
        </div>
      </section>
    </>
  );
}

export default App;
