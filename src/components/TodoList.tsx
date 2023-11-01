import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { useState } from "react";
import { addTodo, toggleTodo } from "../features/todoSlice";

const TodoList: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todos.todos);
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState("");

  const handleToggleTodo = (id: number) => {
    dispatch(toggleTodo(id));
  };

  const handleAddTodo = () => {
    if (newTodo) {
      dispatch(addTodo(newTodo));
      setNewTodo("");
    }
  };

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.conpleted}
              onChange={() => handleToggleTodo(todo.id)}
            />
            {todo.text}
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="add a new todo"
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>
    </div>
  );
};
export default TodoList;
