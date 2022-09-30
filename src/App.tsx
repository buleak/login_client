import { useState } from "react";
import { Button } from "antd";
import { Routes, Route, Link } from "react-router-dom";
import { useSelector } from "@/store";

import Register from "@/features/register";

import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const isLogged = useSelector(state => state.register.isLogged);
  return (
    <div className="App">
      <div className="logo">
        <img src="/vite.svg" className="logo" alt="Vite logo" />
        <img
          className="i-quill-nuclear w10 h10 mx-auto mb-10 text-yellow"
          animate="bounce"
        />
        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>

      <nav>
        {isLogged ? (
          <Link to="/">
            <div className="i-quill-command w10 h10 text-blue-4" />
          </Link>
        ) : (
          <Link to="register">
            <div className="i-quill-vip w10 h10 text-blue-4" />
          </Link>
        )}
      </nav>

      <section>
        <Routes>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
      </section>
    </div>
  );
}

export default App;
