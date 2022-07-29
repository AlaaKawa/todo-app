import React from 'react'


export default function form({ setInputext, todos, setTodos, inputText, setStatus }) {
    //Here I can write javaScript code and function

    const inputTextHandler = (e) => {
        console.log(e.target.value);
        setInputext(e.target.value);
    }
    const submitTodosHandler = (e) => {
        e.preventDefault();

        setTodos([
            ...todos, { text: inputText, completed: false, id: Math.random() * 1000 }
        ])
        setInputext("");
    }
    const statusHandler = (e) => {
        setStatus(e.target.value);
    }
    return (
        <form>
            <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
            <button onClick={submitTodosHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    )
}
