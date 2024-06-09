import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { themeProvider } from "./components/store/themecontext";
import { todoProvider } from "./components/store/todocontext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <themeProvider>
      <todoProvider>
        <App />
      </todoProvider>
    </themeProvider>
  </React.StrictMode>
);