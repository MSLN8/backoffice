import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../style/App.css";
import "../style/Doctor-list.css";
import axios from "axios";

class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      allDoctors: [],
      isValidated: false,
      allProfessions: [],
      professsion: ""
    };
    this.getProfession = this.getProfession.bind(this);
  }

  validateDoctor = (id) => {
    const oneDoctor = this.props.allDoctors
      .filter((doctor) => doctor.id === Number(id))
      .shift();

    oneDoctor.isValidated = true;
    this.setState({ isValidated: true });

    axios
      .put(`http://localhost:8000/api/doctors/${id}`, oneDoctor)
      .then((res) => {
        console.log(res, "Success !");
      })
      .catch((err) => {
        console.log(err, "Failed !");
      });
  };

  unvalidateDoctor = (id) => {
    const oneDoctor = this.props.allDoctors
      .filter((doctor) => doctor.id === Number(id))
      .shift();

    oneDoctor.isValidated = false;
    this.setState({ isValidated: false });
    axios
      .put(`http://localhost:8000/api/doctors/${id}`, oneDoctor)
      .then((res) => {
        console.log(res, "Success !");
      })
      .catch((err) => {
        console.log(err, "Failed !");
      });
  };

  getProfession = (idprofession) => {
    axios.get(`http://localhost:8000${idprofession}`).then((res) => {
      const oneDoctorProfession = res.data.professionName;
      console.log("Les professions par id :", oneDoctorProfession);
      this.setState({ profession: oneDoctorProfession });
      // return;
    });
  };

  // displayProfession = () => {
  //this.getProfession(oneDoctor.Profession);
  // };

  componentDidUpdate() {
    console.log(this.props.allDoctors);
    this.props.allDoctors.map((oneDoctor) => {
      return this.getProfession(`/api/doctors/${oneDoctor.Profession}`);
    });
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <nav>
            <ul>
              <li>
                <a href="/">Patients</a>
              </li>
              <li>
                <a href="/">Docteurs</a>
              </li>
            </ul>
          </nav>
          {this.props.allDoctors.length === 0 ? null : (
            <section>
              <div className="table">
                <table>
                  <thead>
                    <tr>
                      <th>Nom du médecin</th>
                      <th>Profession</th>
                      <th>Valider le compte</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.props.allDoctors.map((oneDoctor) => {
                      return (
                        <tr key={oneDoctor.id}>
                          <td>
                            <Link to={`/doctors/${oneDoctor.id}`}>
                              <p>{oneDoctor.FirstName}</p>
                            </Link>
                          </td>

                          <td>
                            <p>{this.state.profession} </p>
                          </td>

                          <td>
                            {oneDoctor.isValidated === true ? (
                              <label className="switch">
                                <input
                                  type="checkbox"
                                  onChange={() =>
                                    this.unvalidateDoctor(oneDoctor.id)
                                  }
                                  checked
                                />
                                <span className="slider round" />
                              </label>
                            ) : (
                              <label className="switch">
                                <input
                                  type="checkbox"
                                  onChange={() =>
                                    this.validateDoctor(oneDoctor.id)
                                  }
                                />
                                <span className="slider round" />
                              </label>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </section>
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default HomePage;
