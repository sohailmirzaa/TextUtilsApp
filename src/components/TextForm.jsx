import React from "react";
import { useState } from "react";

function TextForm(props) {
  const UpperCaseHandle = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const inverseCaseHandle = () => {
    let newText = text.split(" ").reverse().join();
    setText(newText);
  };

  const lowerCaseHandle = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const clearTextHandle = () => {
    let newText = "";
    setText(newText);
  };
  const onChangeHandler = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  let writingSpeed = text.split(" ").length / text.length;

  return (
    <div
      className="mt-3"
      style={{ color: props.mode === "light" ? "black" : "#F5F2E7" }}
    >
      <h1>{props.heading}</h1>
      <div className="mb-3 mt-2">
        <textarea
          className="form-control"
          value={text}
          onChange={onChangeHandler}
          id="exampleFormControlTextarea1"
          rows="6"
          style={{
            backgroundColor: props.mode === "light" ? "white" : "#395B64",
            color: props.mode === "light" ? "#395B64" : "#F5F2E7",
          }}
        ></textarea>
      </div>

      <button className=" btn btn-primary" onClick={UpperCaseHandle}>
        UpperCase
      </button>
      <button className="btn btn-danger m-2" onClick={lowerCaseHandle}>
        lowerCase
      </button>
      <button className="btn btn-primary m-2" onClick={inverseCaseHandle}>
        inVersECasE
      </button>

      <button className="btn btn-primary m-2" onClick={clearTextHandle}>
        Clear text
      </button>

      <div className="my-4">
        <h2>Text Summary</h2>

        <p>
          {text.split(" ").length - 1} words and {text.length} characters and{" "}
          {writingSpeed} WPS
          <p>{Math.round(0.008 * text.split(" ").length)} minutes read</p>
        </p>

        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default TextForm;
