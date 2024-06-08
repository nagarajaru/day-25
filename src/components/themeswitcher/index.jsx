import style from "./style.module.css";
import { ThemeContext } from "../../store/themecontext";
import { useContext } from "react";

const ThemeSwitcher = () => {
  const { changeTheme, theme } = useContext(ThemeContext);
  return (
    <div className={`${style.switch} ${theme === "dark" && style.switchNeon}`}>
      <div
        className={`${style.circle} ${
          theme === "dark" ? style.moveLeft : style.moveRight
        }`}
      >
        {theme === "dark" ? (
          <img
            src="./images/moon.svg"
            onClick={() => changeTheme("light")}
            alt="moon icon"
          />
        ) : (
          <img
            src="./images/sun.svg"
            onClick={() => changeTheme("dark")}
            alt="sun icon"
          />
        )}
      </div>
    </div>
  );
};

export default ThemeSwitcher;