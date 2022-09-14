import React, { useRef, useState } from "react";
const SimpleInput = (props) => {
  const inputRef = useRef();
  const [inputName, setInputName] = useState("");
  const [inputNameIsValid, setInputNameIsValid] = useState(true);

  const inputNameChange = (event) => {
    setInputName(event.target.value);
  };

  const inputNameChangeHandler = (event) => {
    event.preventDefault();
    if (inputName.trim() === "") {
      setInputNameIsValid(false);
      return;
    }
    console.log(inputName);
    const enterValue = inputRef.current.value;
    console.log(enterValue);

    setInputName("");
  };

  const enterInputClasses = inputNameIsValid
    ? "form-control"
    : "form-control invalid";
  return (
    <form onSubmit={inputNameChangeHandler}>
      <div className={enterInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          ref={inputRef}
          type="text"
          id="name"
          onChange={inputNameChange}
          value={inputName}
        />
        {!inputNameIsValid && (
          <p className="error-text">Name must not be empty</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
