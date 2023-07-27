// Login form for new users
/**
 * exporting register and login based on the parent component in this way parent component
 * can hide the credentils once user sends the credentials
 * In this way we can store the updated values of the fields -> this.setState({[name] : value})
 */
import React, { Component } from "react";

export class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: "login",
      firstName: "",
      lastName: "",
      login: "",
      password: "",
      onLogin: props.onLogin,
      onRegister: props.onRegister,
    };
  }

  onChangeHandler = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
  };

  onSubmitLogin = (e) => {
    this.state.onLogin(e, this.state.login, this.state.password);
  };

  onSubmitRegister = (e) => {
    this.state.onRegister(
      e,
      this.state.firstName,
      this.state.lastName,
      this.state.login,
      this.state.password
    );
  };

  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-6">
          <ul
            className="nav nav-pills nav-justified mb-3"
            id="ex1"
            role="tablist"
          >
            <li className="nav-item" role="presentation">
              <button
                className={`nav-link ${
                  this.state.active === "login" ? "active" : ""
                }`}
                id="tab-login"
                onClick={() => this.setState({ active: "login" })}
              >
                Login
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className={`nav-link ${
                  this.state.active === "register" ? "active" : ""
                }`}
                id="tab-register"
                onClick={() => this.setState({ active: "register" })}
              >
                Register
              </button>
            </li>
          </ul>
          <div className="tab-content">
            <div
              className={`tab-pane fade ${
                this.state.active === "login" ? "show active" : ""
              } id="pills-login"`}
            >
              <form onSubmit={this.onSubmitLogin}>
                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="loginName">
                    Username
                  </label>
                  <input
                    placeholder="Username (ex : xyz@gmail.com)"
                    type="login"
                    id="loginName"
                    name="login"
                    className="form-control"
                    onChange={this.onChangeHandler}
                  />
                </div>
                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="loginpassword">
                    Password
                  </label>
                  <input
                    placeholder="Enter Registered Password"
                    type="password"
                    id="loginpassword"
                    name="password"
                    className="form-control"
                    onChange={this.onChangeHandler}
                  />
                </div>
                <button
                  className="btn btn-primary btn-block mb-4"
                  type="submit"
                >
                  Sign In
                </button>
              </form>
            </div>

            <div
              className={`tab-pane fade ${
                this.state.active === "register" ? "show active" : ""
              } id="pills-register"`}
            >
              <form onSubmit={this.onSubmitRegister}>
                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="firstName">
                    First Name :
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="form-control"
                    onChange={this.onChangeHandler}
                  />
                </div>
                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="lastName">
                    Last Name :
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="form-control"
                    onChange={this.onChangeHandler}
                  />
                </div>
                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="login">
                    User Name :
                  </label>
                  <input
                    placeholder="Enter your Email"
                    type="text"
                    id="login"
                    name="login"
                    className="form-control"
                    onChange={this.onChangeHandler}
                  />
                </div>
                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="password">
                    Password
                  </label>
                  <input
                    placeholder="Enter New Password"
                    type="password"
                    id="password"
                    name="password"
                    className="form-control"
                    onChange={this.onChangeHandler}
                  />
                </div>
                <button
                  className="btn btn-primary btn-block mb-4"
                  type="submit"
                >
                  Sign In
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;
