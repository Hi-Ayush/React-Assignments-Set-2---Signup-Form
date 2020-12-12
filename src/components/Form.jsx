import React from "react";
import { useState } from "react";
export default function Form(props) {
  const [gender, setGender] = useState("male");
  const [finalError, setFinalError] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [invalidInputCount, setInvalidInputCount] = useState(5);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [allValid, setAllValid] = useState(false);
  const [userName, setUserName] = useState("");

  const nameRegEx = /^([a-zA-Z0-9 _-]+)$/;
  const EmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  );
  const phoneRegEx = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;

  const handleName = (event) => {
    setName(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
    console.log(email);
  };
  const handleGender = (event) => {
    setGender(event.target.value);
  };
  const handlePhoneNumber = (event) => {
    setPhoneNo(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleSubmit = () => {
    console.log(name);

    console.log(email);
    if (!nameRegEx.test(name)) {
      setErrorMessage("Name is not alphanumeric");
    } else {
      setInvalidInputCount(invalidInputCount - 1);
    }
    if (!EmailRegex.test(email)) {
      setErrorMessage("Email must conatin @");
    } else {
      setInvalidInputCount(invalidInputCount - 1);
    }
    if (!(gender === "female" || gender === "others")) {
      setErrorMessage("Please identify as male, female or others");
    } else {
      setInvalidInputCount(invalidInputCount - 1);
    }
    if (!phoneRegEx.test(phoneNo)) {
      setErrorMessage("Phone Number must contain only numbers");
    } else {
      setInvalidInputCount(invalidInputCount - 1);
    }
    if (password.length < 6) {
      setErrorMessage("Password must contain atleast 6 letters");
    } else {
      setInvalidInputCount(invalidInputCount - 1);
    }

    if (invalidInputCount > 1) {
      setErrorMessage("All fields are mandatory");
    }
    if (errorMessage === "") {
      setUserName(email.substring(0, email.indexOf("@")));
      setAllValid(true);
    }

    console.log(allValid, userName, errorMessage);
  };
  return (
    <>
      {allValid ? <h3>Hello {userName}</h3> : <h3>{errorMessage}</h3>}
      <label for="name">Name :</label>
      <br />
      <input type="text" id="name" onChange={handleName} data-testid="name" />
      <br />
      <label for="email">Email id :</label>
      <br />
      <input
        type="text"
        id="email"
        onChange={handleEmail}
        data-testid="email"
      />
      <br />
      <label for="gender">Gender :</label>
      <br />
      <input
        type="text"
        id="gender"
        value={gender}
        onChange={handleGender}
        data-testid="gender"
      />
      <br />
      <label for="phoneNumber">Mobile Number :</label>
      <br />
      <input
        type="text"
        id="phoneNumber"
        onChange={handlePhoneNumber}
        data-testid="phoneNumber"
      />
      <br />
      <label for="password">Password :</label>
      <br />
      <input
        type="password"
        id="password"
        onChange={handlePassword}
        data-testid="password"
      />
      <br />
      <button data-testid="submit" onClick={handleSubmit}>
        Submit
      </button>
    </>
  );
}
