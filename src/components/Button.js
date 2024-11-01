import React from "react";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { isValidPhoneNumber } from "react-phone-number-input";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import "./style.css";
const SendButton = ({ inputValue, setFormErrors, setOpen }) => {
  const Action = (e) => {
    e.preventDefault();
    setFormErrors(validate(inputValue));
    if (inputValue && isValidPhoneNumber(inputValue)) {
      movetoWhatsapp(e);
    }
  };
  const validate = (values) => {
    let errors = {};
    if (!values.length) {
      errors = "Please Enter Phone Number!";
      setOpen(true);
      return errors;
    } else if (values && isValidPhoneNumber(values)) {
      setOpen(false);
      return;
    } else {
      errors = "Invalid Phone Number!";
      setOpen(true);
      return errors;
    }
  };
  const movetoWhatsapp = (e) => {
    e.preventDefault();
    console.log(inputValue[0]);
    const arr = inputValue.slice(1);
    // if (arr.length === 12) {
    window.location.href = `http://wa.me/${arr}`;
    // }
  };
  return (
    <div>
      <Button
        variant="contained"
        className="button_class"
        endIcon={<DoneAllIcon />}
        style={{
          backgroundColor: "#3ABF4C",
          borderRadius: "25px",
        }}
        onClick={Action}
      >
        Let's Chat
      </Button>
    </div>
  );
};

export default SendButton;
