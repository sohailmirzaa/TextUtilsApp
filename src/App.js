import { useState } from "react";
import Navbar from "../src/components/Navbar";
import TextForm from "../src/components/TextForm";
import Alert from "./components/Alert";
import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   BrowserRouter,
// } from "react-router-dom";

// import About from "./components/About";

function App() {
  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#395B64";
      showAlert("Dark mode is enable", "success");
      document.title = "TextUtls - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode is enable show", "success");
      document.title = "TextUtls - Light Mode";
    }
  };

  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container">
        <TextForm
          showAlert={showAlert}
          heading="Enter text to analyze"
          mode={mode}
        ></TextForm>
      </div>
    </>
  );
}

export default App;
