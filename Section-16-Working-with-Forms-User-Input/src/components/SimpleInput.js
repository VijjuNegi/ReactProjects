import React, { useState } from "react";
const SimpleInput = (props) => {
  const [inputName, setInputName] = useState("");
  // const [inputNameIsValid, setInputNameIsValid] = useState(false);
  const [inputNameTouch, setInputNameTouch] = useState(false);

  const inputNameIsValid = inputName.trim() !== "";
  const nameInputIsValid = !inputNameIsValid && inputNameTouch;

  // useEffect(() => {
  //   if (inputNameIsValid) {
  //     console.log("name input is valid");
  //   }
  // }, [inputNameIsValid]);

  const inputNameChange = (event) => {
    setInputName(event.target.value);
    // if (event.target.value.trim() !== "") {
    //   setInputNameIsValid(true);
    // }
  };
  const inputBlurHandler = () => {
    setInputNameTouch(true);
    // if (inputName.trim() === "") {
    //   setInputNameIsValid(false);
    // }
  };
  const inputNameChangeHandler = (event) => {
    event.preventDefault();
    setInputNameTouch(true);
    if (!inputNameIsValid) {
      return;
    }
    // setInputNameIsValid(true);

    console.log(inputName);
    // const enterValue = inputRef.current.value;
    // console.log(enterValue);

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
          // ref={inputRef}
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
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
