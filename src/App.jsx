import React, { useState } from 'react';
import './App.css';
import List from './List';
import './Todo';
import './Layout';


function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "리액트 공부하기",
      body: "리액트 기초를 공부해봅시다.",
      isDone: false
    },
    {
      id: 2,
      title: "리액트 공부하기",
      body: "리액트 기초를 공부해봅시다.",
      isDone: true
    }
  ]);

  const initialState = { title: "", body: "" };
  const [inputTodo, setInputTodo] = useState(initialState);

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const newTodo = {
      id: todos.length + 1,
      title: inputTodo.title,
      body: inputTodo.body,
      isDone: false,
    };

    setTodos([...todos, newTodo]);
    setInputTodo(initialState);
  };

  function Header() {
    return (
      <div className="container">
        <div>Hynji Todo List</div>
        <div>React</div>
      </div>
    );
  }

  // function Layout(props) {
  //   return (
  //     <div className="layout">
  //       {props.children}
  //     </div>
  //   );
  // }

  return (
    <div>
      <Header />
        <form onSubmit={onSubmitHandler} className="form_container">
          <div className="input_container">
            <label>제목</label>
            <input
              type="text"
              name="title"
              onChange={(e) => setInputTodo({ ...inputTodo, title: e.target.value })}
              value={inputTodo.title}
              required
            />
            <label>내용</label>
            <input
              type="text"
              onChange={(e) => setInputTodo({ ...inputTodo, body: e.target.value })}
              value={inputTodo.body}
            />
          </div>
          <button>추가하기</button>
        </form>
        <List todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;