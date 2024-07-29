import React, { useState } from "react";

function InputArea(props) {
  return (
    <div className="form">
      <input value={props.inputValue} onChange={props.onChanged} type="text" />
      <button onClick={props.onClicked}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
