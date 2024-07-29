import React, { useState } from "react";

function InputArea(props) {
  const [inputText, setInputText] = useState("");

  function handleChange(event) {
    setInputText(event.target.value);
  }
  return (
    <div className="form">
      <input value={inputText} onChange={handleChange} type="text" />
      <button
        onClick={() => {
          props.onClicked(inputText);
          setInputText("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
