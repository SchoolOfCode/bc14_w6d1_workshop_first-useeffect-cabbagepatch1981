import { useState } from "react";

function Input({ onData }) {
  console.log("Input rerender");
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onData(text);
    setText("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={(e) =>
          console.log("%cinput change event", "color:red") ||
          setText(e.target.value)
        }
        value={text}
        placeholder="to do..."
      />
      <button>+</button>
    </form>
  );
}

export default Input;
