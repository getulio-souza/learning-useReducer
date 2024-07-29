import { useReducer } from 'react'
import './App.css'

const reducer = (state, action) => {
  switch (action.type) {
    case 'Increment':
      return { ...state, count: state.count + 1 }
    case 'showText':
      return { ...state, showText: !state.showText } 
    case 'reset':
      return {count: 0}
    default:
      return 'this action does not exist'
  }
}

function App() {

  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    showText: true,
  });

  // const [count, setCount] = useState(0);
  // const [showText, setShowText] = useState(true);

  const handleClick = () => {
    dispatch({ type: 'Increment' })
    dispatch({ type: 'showText' })
    dispatch({type: 'reset'})
  }

  return (
    <div className="App">
      <h1>Front Beginners</h1>
      <h3>{state.count}</h3>
      <button onClick={handleClick}>Clique</button>
      <button onClick={handleClick}>Reset</button>
      {state.showText && <p>Bem-vindo ao melhor canal de front-end</p>}
    </div>
  )
}

export default App
