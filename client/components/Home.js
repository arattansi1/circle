import React from 'react';
import '../css/App.css';
import '../css/Main.css';
import MyNavbar from './MyNavbar.js'
import GradientLogo from './GradientLogo.js'
import Subjects from './Subjects';
import Conference from './Conference';
import ConferenceDetails from './ConferenceDetails';
import Team from './Team';
import Inquiries from './Inquiries';
import 'bootstrap/dist/css/bootstrap.css';


function Home() {
  return (
    <div>
      {/* <MyNavbar /> */}
      <GradientLogo/>
      <div class="container">
        <div className=" innovation align-content-center">
          <div className="col">
            <h2 className="innovation-title">Innovation is just the beginning</h2>
            <p className="gen-text">Circle is a new-age innovation company dedicated to bringing opportunities for students and empowering them to become the leaders of tomorrow. With an interdisicplinary focus, we aspire for students of multiple sectors to come together and create for the future.</p>
          </div>
          
        </div>
      </div>
      

      <Subjects />

      <Conference />

      <ConferenceDetails />

      <Team />

      <div className="toronto">
        <h2 className="toronto-title">Made in the <img className="heart" src="../assets/heart.png"></img> of Toronto</h2>
        <img className="toronto-pic" src="../assets/toronto.png" />
      </div>

      <Inquiries />

      <div className="footer">
        <div className="footer-wrapper">
          <h3 className="footer-title">circle</h3>
        </div>
      </div>

    </div >
  );
}

export default Home;