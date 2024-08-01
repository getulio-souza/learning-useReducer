// import {useReducer} from 'react'
import { useState, useReducer } from 'react';

type Task = {
  id: number;
  text: string;
}

type Action = | { type: 'add', text: string } | {type: 'remove', id: number};

//the initial value will be a task empty array
const initialState: Task[] = [];

const reducer = (state: Task[], action: Action) => {
  switch (action.type) {
    case 'add':
      console.log(action.text)
      return [...state, { iD: Date.now(), text: action.text }];
    case 'remove':
      return state.filter((task)=> task.id !== action.id)
  }
}

const Task = () => {
  const [input, setInput] = useState("")

  const [state, dispatch] = useReducer(reducer, initialState);

  const addTask = () => {
    dispatch({ type: "add", text: input });
    setInput("")
  }

  const removeTask = () => {
    dispatch({type: 'remove', id: task.id})
  }

  const pressEnter = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      addTask()
      e.preventDefault()
    }
  }

  return (
    <div>
      <h3>Lista de tarefas</h3>
      <div style={{display: 'flex', gap: '10px'}}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={pressEnter}
        />
        <button
          onClick={addTask}
        >
          adicionar tarefa</button>
      </div>
      <ul className='tasks-list'>
        {state.map((task) => (
          <li key={task.id} style={{listStyle:'none'}}>
            <span style={{ display:'flex', gap: '10px'}}>
              {task.text}
              <button onClick={removeTask}>Remove</button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Task