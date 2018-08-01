import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { DropDown } from "./Form";
import "typeface-roboto";
import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid';
import './signup.css'
import AccessibilityIcon from '@material-ui/icons/Accessibility';

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      email: "",
      frontEnd: "",
      backEnd: "",
      city: "",
      usState: "AL",
      confirmPassword: "",
      redirectTo: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    console.log("sign-up handleSubmit, username: ");
    console.log(this.state.username);
    event.preventDefault();

    //request to server to add a new username/password
    axios
      .post("/user/", {
        username: this.state.username,
        password: this.state.password,
        email: this.state.email,
        frontEnd: this.state.frontEnd,
        backEnd: this.state.backEnd,
        city: this.state.city,
        usState: this.state.usState
      })
      .then(response => {
        console.log(response);
        if (response.status === 200) {
          this.setState({
            //redirect to login page
            redirectTo: "/user/login"
          });
          console.log(this.state.redirectTo);
          alert("successful signup");
        }
      })
      .catch(error => {
        alert("signup error: ");
        console.log(error);
      });
  }

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />;
    } else {
      return (
        <Grid className="signGrid">
          <Typography>
            <h1>Sign up <AccessibilityIcon/></h1>
          </Typography>
          <form>
            <div>
              <Typography>
                <label htmlFor="username">Username</label>
              </Typography>
            </div>
            <input
              className="form-input"
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              value={this.state.username}
              onChange={this.handleChange}
            />
            <br /><br />
            <div className="form-group">
              <Typography>
                <label htmlFor="password">Password: </label>
              </Typography>
              <input
                placeholder="Password"
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
              <br /><br />
              <div>
                <Typography>
                  <label htmlFor="Email">Email Address: </label>
                </Typography>
              </div>
              <input
                placeholder="Email Address"
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
              <br /><br />
              <Typography>
                <label htmlFor="Frontend">Front End Technology: </label>
              </Typography>
              <input
                placeholder="Front End"
                type="frontEnd"
                name="frontEnd"
                value={this.state.frontEnd}
                onChange={this.handleChange}
              />
              <br /><br />
              <Typography>
                <label htmlFor="Backend">Back End Technology: </label>
              </Typography>
              <input
                placeholder="Back End Tech"
                type="backEnd"
                name="backEnd"
                value={this.state.backEnd}
                onChange={this.handleChange}
              />
              <br /><br />
              <Typography>
                <label htmlFor="City">City: </label>
              </Typography>
              <input
                placeholder="City"
                type="city"
                name="city"
                value={this.state.city}
                onChange={this.handleChange}
              />
              <br /><br />
              <Typography>
                <label htmlFor="State">State: </label>
              </Typography>
              <DropDown
                type="usState"
                name="usState"
                value={this.state.usState}
                onChange={this.handleChange}
              />
            </div>
              <div />
              <br />
              <button
                className="btn btn-primary col-1 col-mr-auto"
                onClick={this.handleSubmit}
                type="submit"
              >
                JOIN OUR WORLD
              </button>
          </form>
        </Grid>
      );
    }
  }
}

export default Signup;
