// import React, { useState } from "react";

// function App() {
//   const task_input = document.querySelector("input");
//   const date_input = document.querySelector(".schedule-date");
//   const add_btn = document.querySelector(".add-tast-button");
//   const todos_list_body = document.querySelector(".todos-list-body");
//   const alert_message = document.querySelector(".alert-message");
//   const delete_all_btn = document.querySelector(".delete-all-btn");

//   let todos = JSON.parse(localStorage("todos")) || [];

//   window.addEventListener("DOMContentLoaded", () => {
//     showAllTodos();
//     if (!todos.length) {
//       displayTodos([]);
//     }
//   });
//   function getRandomId() {
//     return (
//       Math.random().toString(36).substring(2, 15) +
//       Math.random().toString(36).substring(2, 15)
//     );
//   }

//   function addToDo(task_input, date_input) {
//     let task = {
//       id: getRandomId(),
//       task:
//         task_input.value.length > 14
//           ? task_input.value.slice(0, 14) + "..."
//           : task_input.value,
//       dueDate: date_input.value,
//       completed: false,
//       status: "pending",
//     };
//     todos.push(task);
//   }

//   task_input.addEventListener("keyup", (e) => {
//     if (e.keyCode === 13 && task_input.value.length > 0) {
//       addToDo(task_input, date_input); // Added date input
//       saveToLocalStorage();
//       task_input.value = "";
//       showAllTodos();
//     }
//   });

//   add_btn.addEventListener("click", () => {
//     if (task_input.value === "") {
//       showAlertMessage("Please enter a task", "error");
//     } else {
//       addToDo(task_input, date_input); // Added date input
//       saveToLocalStorage();
//       showAllTodos();
//       task_input.value = "";
//       date_input.value = ""; // Added date input
//       showAlertMessage("Task added successfully", "success");
//     }
//   });

//   delete_all_btn.addEventListener("click", clearAllTodos);

//   //show all todos
//   function showAllTodos() {
//     todos_list_body.innerHTML = "";
//     if (todos.length === 0) {
//       todos_list_body.innerHTML = `<tr><td colspan="5" class="text-center">No task found</td></tr>`;
//       return;
//     }

//     todos.forEach((todo) => {
//       todos_list_body.innerHTML += `
//             <tr class="todo-item" data-id="${todo.id}">
//                 <td>${todo.task}</td>
//                 <td>${todo.dueDate || "No due date"}</td>
//                 <td>${todo.status}</td>
//                 <td>
//                     <button class="btn btn-success btn-sm" onclick="toggleStatus('${
//                       todo.id
//                     }')">
//                         <i class="bx bx-check bx-xs"></i>
//                     </button>
                    
//                     <button class="btn btn-error btn-sm" onclick="deleteTodo('${
//                       todo.id
//                     }')">
//                         <i class="bx bx-trash bx-xs"></i>
//                     </button>
//                 </td>
//             </tr>
//         `;
//     });
//   }

//   //save todos to local storage
//   function saveToLocalStorage() {
//     localStorage.setItem("todos", JSON.stringify(todos));
//   }

//   //show alert message
//   function showAlertMessage(message, type) {
//     let alert_box = `
//         <div class="alert alert-${type} shadow-lg mb-5 w-full">
//             <div>
//                 <span>
//                     ${message}
//                 </span>
//             </div>
//         </div>
//     `;
//     alert_message.innerHTML = alert_box;
//     alert_message.classList.remove("hide");
//     alert_message.classList.add("show");
//     setTimeout(() => {
//       alert_message.classList.remove("show");
//       alert_message.classList.add("hide");
//     }, 3000);
//   }

//   //delete todo
//   function deleteTodo(id) {
//     todos = todos.filter((todo) => todo.id !== id);
//     saveToLocalStorage();
//     showAlertMessage("Todo deleted successfully", "success");
//     showAllTodos();
//   }

//   //clear all todos
//   function clearAllTodos() {
//     if (todos.length > 0) {
//       todos = [];
//       saveToLocalStorage();
//       showAlertMessage("All todos cleared successfully", "success");
//       showAllTodos();
//     } else {
//       showAlertMessage("No todos to clear", "error");
//     }
//   }

//   function toggleStatus(id) {
//     let todo = todos.find((todo) => todo.id === id);
//     todo.completed = !todo.completed;
//     console.log("todo", todo);
//     saveToLocalStorage();
//     displayTodos(todos);
//   }

//   function displayTodos(todosArray) {
//     todos_list_body.innerHTML = "";
//     if (todosArray.length === 0) {
//       todos_list_body.innerHTML = `<tr><td colspan="5" class="text-center">No task found</td></tr>`;
//       return;
//     }
//     todosArray.forEach((todo) => {
//       todos_list_body.innerHTML += `
//             <tr class="todo-item" data-id="${todo.id}">
//                 <td>${todo.task}</td>
//                 <td>${todo.dueDate || "No due date"}</td>
//                 <td>${todo.completed ? "Completed" : "Pending"}</td>
//                 <td>
//                     <button class="btn btn-success btn-sm" onclick="toggleStatus('${
//                       todo.id
//                     }')">
//                         <i class="bx bx-check bx-xs"></i>
//                     </button>

//                     <button class="btn btn-error btn-sm" onclick="deleteTodo('${
//                       todo.id
//                     }')">
//                         <i class="bx bx-trash bx-xs"></i>
//                     </button>
//                 </td>
//             </tr>
//     `;
//     });
//   }
//   return (
//     <div className="container">
//       <header>
//         <h1>Todo List</h1>
//         <div className="alert-message"></div>
//         <div className="input-section">
//           <input
//             type="text"
//             placeholder="Add a todo . . ."
//             className="input input-bordered w-full max-w-xs"
//           />
//           <input
//             type="date"
//             className="input input-bordered w-full max-w-xs schedule-date"
//           />
//           <button className="btn btn-info add add-task-button">
//             <i className="bx bx-plus bx-sm"></i>
//           </button>
//         </div>
//       </header>

//       <div className="todos-filter">
//         <button className="btn btn-info delete-all-btn">Delete All</button>
//       </div>

//       <table className="table w-full">
//         <tbody className="todos-list-body"></tbody>
//       </table>
//     </div>
//   );
// }

// export default App;



import React, { useState, useEffect } from "react";
import './App.css'; 

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [todoText, setTodoText] = useState("");
  const [scheduleDate, setScheduleDate] = useState("");
  const [alert, setAlert] = useState({ message: "", type: "" });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const getRandomId = () => {
    return (
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15)
    );
  };

  const addTodo = () => {
    if (todoText.trim() && scheduleDate) {
      const newTodo = {
        id: getRandomId(),
        task: todoText.length > 14 ? todoText.slice(0, 14) + "..." : todoText,
        dueDate: scheduleDate,
        completed: false,
        status: "pending",
      };
      setTodos([...todos, newTodo]);
      setTodoText("");
      setScheduleDate("");
      showAlertMessage("Task added successfully", "success");
    } else {
      showAlertMessage("Please enter a task and select a date", "error");
    }
  };

  const deleteAllTodos = () => {
    if (todos.length > 0) {
      setTodos([]);
      showAlertMessage("All todos cleared successfully", "success");
    } else {
      showAlertMessage("No todos to clear", "error");
    }
  };

  const toggleStatus = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed, status: todo.completed ? "pending" : "completed" }
          : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    showAlertMessage("Todo deleted successfully", "success");
  };

  const showAlertMessage = (message, type) => {
    setAlert({ message, type });
    setTimeout(() => {
      setAlert({ message: "", type: "" });
    }, 3000);
  };

  return (
    <div className="container">
      <header>
        <h1>Todo List</h1>
        {alert.message && (
          <div className={`alert alert-${alert.type} shadow-lg mb-5 w-full ${alert.type === "hide" ? "hide" : "show"}`}>
            <div>
              <span>{alert.message}</span>
            </div>
          </div>
        )}
        <div className="input-section">
          <input
            type="text"
            placeholder="Add a todo . . ."
            className="input input-bordered w-full max-w-xs"
            value={todoText}
            onChange={(e) => setTodoText(e.target.value)}
          />
          <input
            type="date"
            className="input input-bordered w-full max-w-xs schedule-date"
            value={scheduleDate}
            onChange={(e) => setScheduleDate(e.target.value)}
          />
          <button className="btn btn-info add add-task-button" onClick={addTodo}>
            <i className="bx bx-plus bx-sm"></i>Add
          </button>
        </div>
      </header>

      <div className="todos-filter">
        <button className="btn btn-info delete-all-btn" onClick={deleteAllTodos}>
          Delete All
        </button>
      </div>

      <table className="table w-full">
        <tbody className="todos-list-body">
          {todos.length === 0 ? (
            <tr>
              <td colSpan="5" className="text-center">
                No task found
              </td>
            </tr>
          ) : (
            todos.map((todo) => (
              <tr key={todo.id} className="todo-item" data-id={todo.id}>
                <td>{todo.task}</td>
                <td>{todo.dueDate || "No due date"}</td>
                <td>{todo.status}</td>
                <td>
                  <button
                    className="btn btn-success btn-sm"
                    onClick={() => toggleStatus(todo.id)}
                  >
                    <i className="bx bx-check bx-xs"></i> Status
                  </button>

                  <button
                    className="btn btn-error btn-sm"
                    onClick={() => deleteTodo(todo.id)}
                  >
                    <i className="bx bx-trash bx-xs"></i>Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default App;
