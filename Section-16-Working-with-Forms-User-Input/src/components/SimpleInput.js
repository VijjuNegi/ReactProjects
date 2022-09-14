import React, { useRef, useState } from "react";
const SimpleInput = (props) => {
  const inputRef = useRef();
  const [inputName, setInputName] = useState("");

  const inputNameChange = (event) => {
    setInputName(event.target.value);
  };

  const inputNameChangeHandler = (event) => {
    event.preventDefault();
    console.log(inputName);
    const enterValue = inputRef.current.value;
    console.log(enterValue);

    setInputName("");
  };

  return (
    <form onSubmit={inputNameChangeHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          ref={inputRef}
          type="text"
          id="name"
          onChange={inputNameChange}
          value={inputName}
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
