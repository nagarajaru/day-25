import style from "./style.module.css";
import { useContext, useState, useEffect } from "react";
import { TodoContext } from "../../store/todoContext";
import { v4 as uuidv4 } from "uuid";

const TodoInput = () => {
  const { setTodoItems } = useContext(TodoContext);
  const [todoText, setTodoText] = useState("");
  const [isInputValid, setIsInputValid] = useState(false);

  useEffect(() => {
    validateInput();
  }, [todoText]);

  const validateInput = () => {
    if (todoText && todoText.trim().length > 0) {
      setIsInputValid(true);
    } else {
      setIsInputValid(false);
    }
  }
}