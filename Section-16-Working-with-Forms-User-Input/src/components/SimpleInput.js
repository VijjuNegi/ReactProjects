import React, { useState } from "react";
const SimpleInput = (props) => {
  const [inputName, setInputName] = useState("");
  const [inputNameTouch, setInputNameTouch] = useState(false);

  const inputNameIsValid = inputName.trim() !== "";
  const nameInputIsValid = !inputNameIsValid && inputNameTouch;

  let formIsValid = false;

  if (inputNameIsValid) {
    formIsValid = true;
  }

  const inputNameChange = (event) => {
    setInputName(event.target.value);
  };
  const inputBlurHandler = () => {
    setInputNameTouch(true);
  };
  const inputNameChangeHandler = (event) => {
    event.preventDefault();
    setInputNameTouch(true);
    if (!inputNameIsValid) {
      return;
    }

    console.log(inputName);

    setInputName("");
    setInputNameTouch(false);
  };

  const enterInputClasses = nameInputIsValid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={inputNameChangeHandler}>
      <div className={enterInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={inputNameChange}
          onBlur={inputBlurHandler}
          value={inputName}
        />
        {nameInputIsValid && (
          <p className="error-text">Name must not be empty</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
