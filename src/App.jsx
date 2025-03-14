import { useState } from "react";
import Navbar from "./components/Navbar";

function App() {
  const [todo, setTodo] = useState(""); // To store input value
  const [todos, setTodos] = useState([]); // To store all todos
  const [showAll, setShowAll] = useState(true); // To control visibility of completed todos

  // Add a new todo
  const handleAdd = () => {
    if (todo.trim() === "") return; // Prevent adding empty todos
    setTodos([...todos, { todo, isCompleted: false }]);
    setTodo(""); // Clear input field after adding todo
  };

  // Edit an existing todo
  const handleEdit = (index) => {
    const newTodos = [...todos];
    const newTodo = prompt("Edit your todo:", newTodos[index].todo);
    if (newTodo && newTodo.trim() !== "") {
      newTodos[index].todo = newTodo;
      setTodos(newTodos);
    }
  };

  // Delete a todo
  const handleDelete = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  // Toggle the completion state of a todo (checkbox)
  const handleCheckbox = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  // Toggle the visibility of completed todos
  const toggleShowAll = () => {
    setShowAll(!showAll); // Toggle showAll state
  };

  // Update input value for the new todo
  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  return (
    <>
      <Navbar />
      <div className="container bg-purple-400 m-auto w-[40vw] h-[80vh] border rounded-md p-4 my-6 flex flex-col border-green-400">
        {/* Input and Add Button */}
        <div className="todos font-bold p-4 text-center border border-white">
          <h1 className="text-lg mb-4">iTask - Manage your todos at one place</h1>
          <div className="text-start mb-2">Add a Todo</div>
          <input
            onChange={handleChange}
            value={todo}
            className="w-[85%] border rounded-md p-2 mb-4"
            type="text"
            placeholder="Enter todo"
          />
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={handleAdd}
              className="bg-purple-100 border rounded-md px-4 py-2 text-sm"
            >
              Add
            </button>
            <button
              onClick={toggleShowAll}
              className="bg-green-500 text-white border rounded-md px-4 py-2 text-sm"
            >
              {showAll ? "Hide Completed" : "Show All"}
            </button>
          </div>
        </div>

        {/* Todos List with Scrollbar */}
        <div
          className="showtodo border border-red-300 bg-white mt-4 p-2 overflow-y-auto"
          style={{ maxHeight: "60vh" }} // Set max height to allow scrolling
        >
          {todos.length === 0 ? (
            <p className="text-center text-gray-500">No todos to display</p>
          ) : (
            todos
              .filter((item) => showAll || !item.isCompleted) // Filter logic based on showAll
              .map((items, index) => (
                <div
                  key={index}
                  className="todo-item flex justify-between items-center p-2 border-b last:border-none"
                >
                  <div className="flex items-center gap-2">
                    {/* Checkbox */}
                    <input
                      type="checkbox"
                      checked={items.isCompleted}
                      onChange={() => handleCheckbox(index)}
                      className={`form-checkbox ${
                        items.isCompleted ? "bg-gray-300" : "bg-green-300"
                      }`}
                    />
                    {/* Todo Text */}
                    <span
                      className={`${
                        items.isCompleted ? "line-through text-gray-500" : ""
                      }`}
                    >
                      {items.todo}
                    </span>
                  </div>
                  {/* Buttons */}
                  <div className="btns flex gap-2">
                    <button
                      onClick={() => handleEdit(index)}
                      className="editbtn bg-blue-500 text-white border rounded-md px-3 py-1 text-xs"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(index)}
                      className="deletebtn bg-red-500 text-white border rounded-md px-3 py-1 text-xs"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))
          )}
        </div>
      </div>
    </>
  );
}

export default App;
