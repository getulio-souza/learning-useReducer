import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import './index.css'
import Task from './task'
// import ReducerApp from './reducer.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <ReducerApp /> */}
    <Task/>
  </React.StrictMode>,
)

