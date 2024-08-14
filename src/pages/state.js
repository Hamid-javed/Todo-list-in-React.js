import { useState } from "react";

function State() {
  const [age, setAge] = useState(0);
  return (
    <div>
    <h1>{age}</h1>
    <button
      onClick={() => {
        setAge(age + 1);
      }}
    >
      Click me
    </button>
    </div>
  );
}

export default State;