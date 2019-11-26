import React from "react";
import TodosList from "./components/TodosList";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <h1>TO-DO:</h1>
      <TodosList />
      <Footer />
    </div>
  );
}

export default App;
