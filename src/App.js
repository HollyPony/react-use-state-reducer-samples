import React from "react";

import useStateReducer from "react-use-state-reducer";

export default function App() {
  const [state, dispatch] = useStateReducer({
    init: true,
    fetch: false
  });

  React.useEffect(() => {
    // /!\ Don't do that at home !! `setTimeout` had issues with React/hooks : https://medium.com/javascript-in-plain-english/usetimeout-react-hook-3cc58b94af1f
    setTimeout(() => dispatch(false, "init"), 1000);
  }, [dispatch]);

  if (state["init"]) {
    return <span>Initializing</span>;
  }

  return (
    <div>
      <span>{state["fetch"] ? "fetching" : "fetched"}</span>
      <span>{state[undefined]}</span>
      <button onClick={() => dispatch(true, "fetch")}>Start fetch</button>
      <button onClick={() => dispatch(false, "fetch")}>Stop fetch</button>
    </div>
  );
}
