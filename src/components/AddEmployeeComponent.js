import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import EmployeeService from "../services/EmployeeService";
import { useNavigate, Link, useParams } from "react-router-dom";

const AddEmployeeComponent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const saveOrUpdateEmployee = (event) => {
    event.preventDefault();

    const employee = { firstName, lastName, email };

    if (id) {
      EmployeeService.updateEmployee(id, employee)
        .then((response) => {
          navigate("/employees");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      EmployeeService.createEmployee(employee)
        .then((response) => {
          console.log(response.data);

          navigate("/employees");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    EmployeeService.getEmployeeById(id)
      .then((response) => {
        setFirstName(response.data.firstName);
        setLastName(response.data.lastName);
        setEmail(response.data.email);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const title = () => {
    if (id) {
      return <h2 className="text-center">Update Employee</h2>;
    } else {
      return <h2 className="text-center">Add Employee</h2>;
    }
  };

  return (
    <div>
      <br />
      <br />
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            {title()}
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
                  onClick={(event) => saveOrUpdateEmployee(event)}
                >
                  Submit
                </Button>
                <Link to="/employees" className="btn btn-danger m-4">
                  Cancel
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEmployeeComponent;
