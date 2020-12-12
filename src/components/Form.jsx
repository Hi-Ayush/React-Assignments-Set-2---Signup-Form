import React from "react";
import { useState } from "react";
export default function Form() {
  const [gender, setGender] = useState("male");

  const [errorMessage, setErrorMessage] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNo, setPhoneNo] = useState("");

  const [userName, setUserName] = useState("");

  const nameRegEx = /^([a-zA-Z0-9 _-]+)$/;

  const handleName = (event) => {
    setName(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
    // console.log(email);
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
    if (
      name === "" ||
      email === "" ||
      phoneNo === "" ||
      gender === "" ||
      password === ""
    ) {
      setErrorMessage("All fields are mandatory");
      setUserName("");
      return;
    }
    if (!nameRegEx.test(name)) {
      setErrorMessage("Name is not alphanumeric");
      setUserName("");
      return;
    }

    if (email.includes("@") === false) {
      setErrorMessage("Email must conatin @");
      setUserName("");
      return;
    }

    if (!(gender === "male" || gender === "female" || gender === "others")) {
      setErrorMessage("Please identify as male, female or others");
      setUserName("");
      return;
    }

    if (isNaN(phoneNo)) {
      setErrorMessage("Phone Number must contain only numbers");
      setUserName("");
      return;
    }

    if (password.length < 6) {
      setErrorMessage("Password must contain atleast 6 letters");
      setUserName("");
      return;
    }

    setUserName(email.substring(0, email.indexOf("@")));
    setErrorMessage("");
  };
  return (
    <>
      {errorMessage && <h3>{errorMessage}</h3>}
      {userName && <h3>Hello {userName}</h3>}
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
