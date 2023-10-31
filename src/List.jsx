import React from "react";
import Todo from "./Todo";
import './App.css';

function List({ todos, setTodos }) {
    const onDeleteHandler = (selectedId) => {
        const remainedTodos = todos.filter((todo) => todo.id !== selectedId);
        setTodos(remainedTodos);
    }

    const onCompleteHandler = (selectedId) => {
        const newTodos = todos.map((todo) => {
            if (todo.id === selectedId) {
                return { ...todo, isDone: !todo.isDone };
            }
            return todo;
        });
        setTodos(newTodos);
    }

    return (
        <div className="list_container">
            <h1>Working.. 🔥</h1>
            <div className="list_wrapper">
                {todos.map((todo) => {
                    if (!todo.isDone) {
                        return <Todo todo={todo} key={todo.id} onDeleteHandler={onDeleteHandler} onCompleteHandler={onCompleteHandler} />;
                    }
                    return null;
                })}
            </div>
            <h1>Done..! 🎉</h1>
            <div className="list_wrapper">
                {todos.map((todo) => {
                    if (todo.isDone) {
                        return <Todo todo={todo} key={todo.id} onDeleteHandler={onDeleteHandler} onCompleteHandler={onCompleteHandler} />;
                    }
                    return null;
                })}
            </div>
        </div>
    )
}

export default List;
