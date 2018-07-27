import axios from "axios";
import React, { Component } from "react";
import { Container } from "./Grid";
import api from "../api/api";
class Profile extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      username: null,
      userInfo: {},
      isUpdate: false
    };
  }
  loadUser = id => {
    api
      .getUser(id)
      .then(res => this.setState({ userInfo: res.data }))
      .catch(err => console.log(err));
  };
  componentDidMount() {
    axios.get("/user/profile").then(response => {
      console.log("full response: " + response);
      console.log("Get user response: ");
      console.log(response.data);
      console.log("this is the username: " + response.data.user.username);
      console.log("this is the frontend info: " + response.data.user.frontEnd);
      if (response.data.user) {
        console.log("Get User: There is a user saved in the server session: ");
        this.loadUser(response.data.user._id);
        this.setState({
          loggedIn: true,
          username: response.data.user.username,
          userInfo: response.data
        });
      } else {
        console.log("Get user: no user");
        this.setState({
          loggedIn: false,
          username: null
        });
      }
    });
    getReadOnly = () => (
      <Container>
        <div>Profile</div>
        <h1> Hello !</h1>
      </Container>
    );

    getUpdateform = () => (
      <Container>
        <div>Edit</div>
      </Container>
    );
  }
  render() {
    // console.log("User Info")
    // console.log(this.state.userInfo)
    if (this.state.isUpdate) return this.getUpdateform();
    else return this.getReadOnly();
  }
}

export default Profile;
