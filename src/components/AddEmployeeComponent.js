import React, { useState } from "react";
import { Button } from "react-bootstrap";
import EmployeeService from "../services/EmployeeService";
import { useNavigate,Link } from "react-router-dom";

const AddEmployeeComponent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const saveEmployee = (event) => {
    event.preventDefault();

    const employee = { firstName, lastName, email };

    EmployeeService.createEmployee(employee)
      .then((response) => {
        console.log(response.data);

        navigate("/employees");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <br />
      <br />
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h2 className="text-center">Add Employee</h2>
            <div className="card-body">
              <form>
                <div className="form-group mb-2">
                  <label className="form-label">FirstName : </label>
                  <input
                    type="text"
                    placeholder="Enter first Name"
                    name="firstName"
                    className="form-control"
                    value={firstName}
                    onChange={(event) => setFirstName(event.target.value)}
                  />
                </div>

                <div className="form-group mb-2">
                  <label className="form-label">LastName : </label>
                  <input
                    type="text"
                    placeholder="Enter Last Name"
                    name="lastName"
                    className="form-control"
                    value={lastName}
                    onChange={(event) => setLastName(event.target.value)}
                  />
                </div>

                <div className="form-group mb-2">
                  <label className="form-label">e-mail : </label>
                  <input
                    type="text"
                    placeholder="Enter e-mail id "
                    name="email"
                    className="form-control"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </div>

                <Button
                  className="btn btn-success"
                  onClick={(event) => saveEmployee(event)}
                >
                  Submit
                </Button>
                <Link to='/employees' className="btn btn-danger m-4">Cancel</Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEmployeeComponent;
