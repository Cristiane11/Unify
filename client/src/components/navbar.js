import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import "./home.css";
import axios from "axios";

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};
class Navbar extends Component {
  constructor() {
    super();
    this.logout = this.logout.bind(this);
  }
  logout(event) {
    event.preventDefault();
    console.log("logging out");
    axios
      .get("/user/logout")
      .then(response => {
        if (response.status === 200) {
          this.props.updateUser({
            loggedIn: false,
            username: null
          });
          window.location = response.data.location;
        }
      })
      .catch(error => {
        console.log("Logout error");
      });
  }

  render() {
    const { classes, loggedIn } = this.props;
    // const loggedIn = this.props.loggedIn;
    return (
      <div className={classes.root}>
        <AppBar>
          <Toolbar>
            {/* <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton> */}
            <Typography
              variant="title"
              color="inherit"
              className={classes.flex}
            >
              Unify
            </Typography>
            <Link
              onClick={this.logout}
              to="#"
              className="btn btn-link text-secondary"
            >
              <Button className="text-secondary" color="inherit">
                Account
              </Button>
            </Link>
            <Link to="/user/login" className="btn btn-link text-secondary">
              <Button className="text-secondary" color="inherit">
                Login
              </Button>
            </Link>
            <Link to="/user/signup" className="btn btn-link text-secondary">
              <Button className="text-secondary" color="inherit">
                Register
              </Button>
            </Link>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

// function ButtonAppBar(props) {
//   const { classes } = props;
//   return (
//     <div className={classes.root}>
//       <AppBar>
//         <Toolbar>
//           {/* <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
//             <MenuIcon />
//           </IconButton> */}
//           <Typography variant="title" color="inherit" className={classes.flex}>
//             Unify
//           </Typography>
//           <Link to="/user/login" className="btn btn-link text-secondary">
//             <Button className="text-secondary" color="inherit">
//               Login
//             </Button>
//           </Link>
//           <Link to="/user/signup" className="btn btn-link text-secondary">
//             <Button className="text-secondary" color="inherit">
//               Register
//             </Button>
//           </Link>
//           <Link to="/user/profile" className="btn btn-link text-secondary">
//             <Button className="text-secondary" color="inherit">
//               Account
//             </Button>
//           </Link>
//         </Toolbar>
//       </AppBar>
//     </div>
//   );
// }

Navbar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Navbar);
