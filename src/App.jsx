import style from "./App.css";
import { useContext } from "react";
import { Header, TodoInput, TodoList } from "./components";
import { themeContext } from "./components/store/themecontext";

function App() {
  const { theme } = useContext(themeContext);
  return (
    <div className={style.app} data-theme={theme}>
      <div className={style.wrapper}>
        <header />
        <todoInput />
        <todoList />
      </div>
    </div>
  );
}

export default App;
