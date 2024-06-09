import { useContext, useState, useEffect } from "react";
import style from "./style.css";
import { todoContext } from "../store/todocontext";
import { todoItem } from "../todoitem";

const TodoList = () => {
  const { todoItems } = useContext(todoContext);
  const [filteredtodoItems, setFilteredtodoItems] = useState(todoItems);
  const [filterParameter, setFilterParameter] = useState("all");

  useEffect(() => {
    setFilteredtodoItems(todoItems);
  }, [todoItems]);

  const filtertodo = () => {
    const filteredItems = todoItems.filter((todo) => todo.isCompleted === true);
    setFilteredtodoItems(filteredItems);
    setFilterParameter("completed");
  };

  const cleartodo = () => {
    setFilteredtodoItems(todoItems);
    setFilterParameter("all");
  };

  return (
    <div>
      <div className={style.filterWrapper}>
        <p
          onClick={cleartodo}
          className={`${style.filterText} ${
            filterParameter === "all" && style.selected
          }`}
        >
          All
        </p>
        <p>&nbsp;/&nbsp;</p>
        <p
          onClick={filtertodo}
          className={`${style.filterText} ${
            filterParameter === "completed" && style.selected
          }`}
        >
          Completed
        </p>
      </div>
      <ul className={style.list}>
        {filteredtodoItems.length > 0 &&
          filteredtodoItems.map((todo) => (
            <todoItem key={todo.id} data={todo} />
          ))}
      </ul>
    </div>
  );
};

export default todoList;