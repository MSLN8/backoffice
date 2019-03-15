import React from "react";
import "../style/App.css";
import "../style/Doctor-detail.css";

const Doctors = (props) => {
  const Profile = require("../style/img/profile.png");
  const Details = props.match.params.doctorId;
  const thisDoctor = props.allDoctors
    .filter((doctor) => doctor.id === Number(Details))
    .shift();

  return (
    <React.Fragment>
      <div>
        <article>
          <img src={Profile} className="profilepic" alt="profile" />
          <div className="details">
            <h2> {thisDoctor.FirstName} </h2>
            <p>Tarif standard:</p> <input type="text" placeholder="25€" />
            <button> Enregistrer les modifications</button>
          </div>
        </article>
        <section>
          <h4>Documents</h4>
          <table>
            <tbody>
              <tr>
                <td>Attestation</td>
                <td>
                  <a href="/">Voir</a>
                </td>
              </tr>
              <tr>
                <td>Carte d'identité</td>
                <td>
                  <a href="/">Voir</a>
                </td>
              </tr>
              <tr>
                <td>Carte CPS</td>
                <td>
                  <a href="/">Voir</a>
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        <button id="validation">Valider le médecin</button>
      </div>
    </React.Fragment>
  );
};

export default Doctors;
