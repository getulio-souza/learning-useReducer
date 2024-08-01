import { useReducer } from "react";

type State = {
  count: number;
};

type Action = { type: "increment" } | { type: "decrement" } | { type: "reset" };

const initializeState = { count: 0 };

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      if (state.count === 0) {
        return {count: state.count}
      }
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
  }
};

const ReducerApp = () => {
  const [state, dispatch] = useReducer(reducer, initializeState);
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <button
        style={{ width: "30px" }}
        onClick={() => dispatch({ type: "decrement" })}
      >
        -
      </button>
      <h3>{state.count}</h3>
      <button
        style={{ width: "30px" }}
        onClick={() => dispatch({ type: "increment" })}
      >
        +
      </button>
      <button onClick={()=> dispatch({type: 'reset'})}>reset</button>
    </div>
  );
};

export default ReducerApp;
