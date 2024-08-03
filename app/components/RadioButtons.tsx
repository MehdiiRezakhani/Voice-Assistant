import React from "react";

type RadioOption = { value: string; label: string };

type RadioButtonsProps = {
  options: RadioOption[]; 
  selectedValue: string; 
  setSelectedValue: (value: string) => void;
};

const RadioButtons: React.FC<RadioButtonsProps> = ({
  options,
  selectedValue,
  setSelectedValue,
}) => {
  return (
    <div className="radioButtonsContainer">
      <p>Select the response mode:</p>
      <div className="radioButtons">
        {options.map((option) => (
          <label 
            key={option.value} 
            style={
              {
                backgroundColor:selectedValue === option.value ? "#175CD3" : "white",
                color:selectedValue === option.value ? "white" : "#175CD3",
              }
            }
          >
            <input
              type="radio"
              value={option.value}
              checked={selectedValue === option.value}
              onChange={() => setSelectedValue(option.value)}
              className="input"
            />
              {option.label}
          </label>
        ))}
      </div>
    </div>
  );
};

export default RadioButtons;
