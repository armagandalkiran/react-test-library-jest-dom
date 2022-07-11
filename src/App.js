import { React, useState } from "react";

export const replaceCamelWithSpaces = (colorName) => colorName.replace(/\B([A-Z])\B/g," $1") 

const buttonInitialState = {
  color: "mediumvioletred",
  text: `change to ${replaceCamelWithSpaces("MidnightBlue")}`,
};

const checkboxInitialState = false;

function App() {
  const [buttonStyle, setButtonStyle] = useState(buttonInitialState);
  const [checkboxStyle, setCheckboxStyle] = useState(checkboxInitialState);

  const handleButtonChange = () => {
    buttonStyle.color === "mediumvioletred"
      ? setButtonStyle({ color: "MidnightBlue", text: "change to Medium Violet Red" })
      : setButtonStyle(buttonInitialState);
  };

  const handleCheckboxChange = () => {
    setCheckboxStyle(!checkboxStyle);
  };

  return (
    <div className="App">
      <button
        onClick={handleButtonChange}
        style={
          checkboxStyle
            ? { backgroundColor: "gray" }
            : { backgroundColor: `${buttonStyle.color}` }
        }
        disabled={checkboxStyle}
      >
        {buttonStyle.text}
      </button>
      <input type="checkbox" onChange={handleCheckboxChange} />
    </div>
  );
}

export default App;
