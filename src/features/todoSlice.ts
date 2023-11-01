import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Todo {
  id: number;
  text: string;
  conpleted: boolean;
}

interface TodoState {
  todos: Todo[];
}
const initialState: TodoState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const newTodo: Todo = {
        id: Date.now(),
        text: action.payload,
        conpleted: false,
      };
      state.todos.push(newTodo);
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      const todo = state.todos.find((t) => t.id === action.payload);
      if (todo) {
        todo.conpleted = !todo.conpleted;
      }
    },
  },
});
export const { addTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;
