import React from "react";
import InputTodo from "./components/InputTodo";
import ListTodos from "./components/ListTodo";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <InputTodo />
      <ListTodos />
      <Footer />
    </div>
  );
}

export default App;
