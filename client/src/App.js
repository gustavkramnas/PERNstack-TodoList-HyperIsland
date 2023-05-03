import React from "react";
import InputTodos from "./components/InputTodos";
import ListTodos from "./components/ListTodos";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <InputTodos />
      <ListTodos />
      <Footer />
    </div>
  );
}

export default App;
