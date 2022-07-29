import React from 'react'
//importing components
import Todo from './Todo'
export default function TodoList({ todos, setTodos, filteredTodos }) {
    console.log({ todos });
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map((todo) => (
                    < Todo key={todo.id} text={todo.text}
                        todo={todo}
                        setTodos={setTodos} todos={todos} />
                ))}


            </ul>

        </div>
    )
}
