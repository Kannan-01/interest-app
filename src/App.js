import "./App.css";
import { TextField } from "@mui/material";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useState } from "react";

function App() {
  const [interest, setInterest] = useState(0);
  const [principle, setPrinciple] = useState(0);
  const [rate, setRate] = useState(0);
  const [year, setYear] = useState(0);

  const [isPrincipleValid, setisPrincipleValid] = useState(true);
  const [isRateValid, setisRateValid] = useState(true);
  const [isYearValid, setisYearValid] = useState(true);

  const handleCalculate = (e) => {
    e.preventDefault();
    if (!principle || !rate || !year) {
      alert("Please fill the form completely!");
    } else {
      setInterest((principle * rate * year) / 100);
    }
  };
  const handleReset = (e) => {
    setInterest(0);
    setPrinciple(0);
    setRate(0);
    setYear(0);
    setisPrincipleValid(true);
    setisRateValid(true);
    setisYearValid(true);
  };
  // const validPrinciple = (e)=>{
  //   const {value} = e.target
  //   if(!! value.match (/^[0-9]+$/)){
  //     setPrinciple(value)
  //     setIsValid(true)
  //   }
  //   else{
  //     setPrinciple(value)
  //     setIsValid(false)
  //   }

  // }
  const validateInput = (e) => {
    const { value, name } = e.target;
    if (!!value.match(/^[0-9]+$/)) {
      if (name === "principle") {
        setPrinciple(value);
        setisPrincipleValid(true);
      } else if (name === "rate") {
        setRate(value);
        setisRateValid(true);
      } else {
        setYear(value);
        setisYearValid(true);
      }
    } else {
      if (name === "principle") {
        setPrinciple(value);
        setisPrincipleValid(false);
      } else if (name === "rate") {
        setRate(value);
        setisRateValid(false);
      } else {
        setYear(value);
        setisYearValid(false);
      }
    }
  };

  return (
    <div
      style={{ height: "100vh" }}
      className="d-flex w-100 justify-content-center align-items-center bg-dark"
    >
      <div style={{ width: "500px" }} className=" bg-light rounded p-5">
        <div className="heading d-flex flex-column justify-content-center align-items-center">
          <h3>Simple Calculator</h3>
          <p>Calculate your simple interest Easily</p>
        </div>
        <div
          style={{ height: "150px" }}
          className="interest-card d-flex flex-column w-100 justify-content-center align-items-center rounded bg-info text-light shadow"
        >
          <h1> ₹ {interest} </h1>
          <p className="fe-bold">Total Simple Interest</p>
        </div>
        <form className="mt-5" onSubmit={handleCalculate}>
          {/* TEXT FIELD */}
          <div>
            <TextField
              className="w-100 mb-3"
              id="outlined-basic"
              label="₹ Principle Amount "
              variant="outlined"
              value={principle || ""}
              onChange={(e) => validateInput(e)}
              name="principle"
            />
          </div>
          {!isPrincipleValid && (
            <div className="mb-3 text-danger">*invalid input</div>
          )}
          <div>
            <TextField
              className="w-100 mb-3"
              id="outlined-basic"
              label="Rate of Interest (p.a) % "
              variant="outlined"
              value={rate || ""}
              onChange={(e) => validateInput(e)}
              name="rate"
            />
          </div>
          {!isRateValid && (
            <div className="mb-3 text-danger">*invalid rate</div>
          )}
          <div>
            <TextField
              className="w-100 mb-3"
              id="outlined-basic"
              label="Time Period (Yr) "
              variant="outlined"
              value={year || ""}
              onChange={(e) => validateInput(e)}
              name="year"
            />
          </div>
          {!isYearValid && (
            <div className="mb-3 text-danger">*invalid year</div>
          )}
          {/* STACK */}
          <Stack direction="row" spacing={2}>
            <Button
              disabled={
                isPrincipleValid && isRateValid && isYearValid ? false : true
              }
              type="submit"
              style={{ width: "200px", height: "75px" }}
              className="bg-info"
              variant="contained"
            >
              Calculate
            </Button>
            <Button
              onClick={handleReset}
              style={{ width: "200px", height: "75px" }}
              className="border border-dark"
              variant="outlined"
            >
              Reset
            </Button>
          </Stack>
        </form>
      </div>
    </div>
  );
}

export default App;
