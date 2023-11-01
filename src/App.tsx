import "./App.css";
import { Provider } from "react-redux";
import Counter from "./components/Counter";
import store from "./store";
import TodoList from "./components/TodoList";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Counter />
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;
