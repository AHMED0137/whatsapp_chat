import React from "react";
import Input from "./components/Input";
import SendButton from "./components/Button.js";
import Grid from "@mui/material/Grid";
import logo from "./assests/logo.png";
import Alert from "@mui/material/Alert";
import Collapse from "@mui/material/Collapse";
import "./App.css";
import Helpicon from "./components/Helpicon";
import InfoModal from "./components/InfoModal";
function App() {
  const [inputValue, setInputValue] = React.useState([]);
  const [formErrors, setFormErrors] = React.useState();
  const [open, setOpen] = React.useState();

  return (
    <>
      <div className="helpIcon">
        <div className="Iconbutton">
          <InfoModal />
        </div>
      </div>
      <div className="App">
        <Grid container spacing={1} justify="center" alignItems="center">
          <Grid item xs={12}>
            {" "}
            <img src={logo} className="logo" alt="logo" />
          </Grid>
          <Grid xs={12} px={8} className="inputField">
            <Input setInputValue={setInputValue} />
          </Grid>
          <Grid xs={12} className="inputerror">
            <Collapse in={open}>
              <Alert
                onClose={() => {
                  setOpen(false);
                }}
                severity="error"
              >
                {formErrors}
              </Alert>{" "}
            </Collapse>
            {/* <span className="error">{formErrors}</span> */}
          </Grid>
          <Grid item xs={12} style={{ marginTop: "1%" }}>
            {" "}
            <SendButton
              inputValue={inputValue}
              setFormErrors={setFormErrors}
              setOpen={setOpen}
            />
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default App;
