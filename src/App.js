import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./style/App.css";
import HomePage from "./components/HomePage";
import Navigation from "./components/Navigation";
import Doctors from "./components/Doctors";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = { allDoctors: [], allProfessions: [] };
  }

  getAllDoctors = () => {
    axios.get(`http://localhost:8000/api/doctors`).then((res) => {
      const allDoctors = res.data["hydra:member"];
      this.setState({
        allDoctors
      });
    });
  };

  componentDidMount() {
    this.getAllDoctors();
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <Navigation />
          <Route
            exact
            path="/"
            render={(props) => (
              <HomePage
                allDoctors={this.state.allDoctors}
                match={props.match}
                allProfessions={this.state.allProfessions}
              />
            )}
          />
          <Route
            path="/doctors/:doctorId"
            render={(props) => (
              <Doctors match={props.match} allDoctors={this.state.allDoctors} />
            )}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
