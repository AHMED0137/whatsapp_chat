import React from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const Input = ({ setInputValue }) => {
  return (
    <>
      <div>
        <PhoneInput
          placeholder="Enter phone number"
          defaultCountry="PK"
          countryCallingCodeEditable={false}
          onChange={setInputValue}
          className="input"
          style={{
            padding: "3%",
            backgroundColor: "#f5f5f5  ",
            borderRadius: "25px",
          }}
          autoFocus
          withDarkTheme
          inputClass="textInputStyle"
        />
      </div>
    </>
  );
};

export default Input;
