import React from "react";
import { useState, useEffect } from "react";
import swal from "sweetalert";
import "./App.css";

// regex variables
const nameRegex = /^[a-zA-Z]+$/;
// const numSymRegex = /^[0-9!@#\$%\^\&*\)\(+=._-]+$/g;
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const phoneRegex = /^\d{10}$/;

const App = () => {
  // initial state object
  const initialValues = {
    firstName: "",
    lastName: "",
    emailID: "",
    phoneNo: "",
  };
  // state variable for the form.
  const [formValues, setFormValues] = useState(initialValues);
  // state variable for errors
  const [formErrors, setFormErrors] = useState({});
  //
  const [isSubmit, setIsSubmit] = useState(false);

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
      swal({
        title: "Submitted Successfully!",
        text: "You clicked the button!",
        icon: "success",
      });
    }
  }, [formErrors]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  const validate = (values) => {
    const errors = {};

    // First Name
    if (!values.firstName) {
      errors.firstName = "First Name is Required";
    } else if (!nameRegex.test(values.firstName)) {
      errors.firstName = "Please enter a valid First Name";
    }
    // Last name
    if (!values.lastName) {
      errors.lastName = "last Name is Required";
    } else if (!nameRegex.test(values.lastName)) {
      errors.lastName = "Please enter a valid Last Name";
    }
    // email ID
    if (!values.emailID) {
      errors.emailID = "Email ID required";
    } else if (!emailRegex.test(values.emailID)) {
      errors.emailID = "Please enter a valid E-mail ID";
    }

    // Phone Number
    if (!values.phoneNo) {
      errors.phoneNo = "Phone Number required";
    } else if (!phoneRegex.test(values.phoneNo)) {
      errors.phoneNo = "Please enter a valid Phone Number";
    }

    // if (!phoneRegex.test(values.emailID)) {
    //   errors.phoneNo = "Please enter a valid Phone No";
    // }

    return errors;
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form-container">
          <h1>Student Registration</h1>
          <div className="ui divider"></div>
          <div className="ui form">
            <div className="field">
              <label htmlFor="firstName">First Name</label>
              <input
                name="firstName"
                type="text"
                placeholder="First Name"
                value={formValues.firstName}
                onChange={handleChange}
              ></input>
            </div>
            <p>{formErrors.firstName}</p>
            <div className="field">
              <label htmlFor="lastName">Last Name</label>
              <input
                name="lastName"
                type="text"
                placeholder="Last Name"
                value={formValues.lastName}
                onChange={handleChange}
              ></input>
            </div>
            <p>{formErrors.lastName}</p>
            <div className="field">
              <label htmlFor="emailID">Email ID</label>
              <input
                name="emailID"
                type="email"
                placeholder="Email ID"
                value={formValues.emailID}
                onChange={handleChange}
              ></input>
            </div>
            <p>{formErrors.emailID}</p>
            <div className="field">
              <label htmlFor="phoneNo">Phone Number</label>
              <input
                name="phoneNo"
                type="text"
                placeholder="Phone No"
                value={formValues.phoneNo}
                onChange={handleChange}
              ></input>
            </div>
            <p>{formErrors.phoneNo}</p>
            <button className="fluid ui button blur">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default App;
