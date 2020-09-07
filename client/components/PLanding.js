import React, { Component } from "react";
import * as aniLinesData from '../assets/animations/LinesData.json';
import LottieAnimation from "./global/LottieAnimation";
import { useSpring, animated } from 'react-spring';
import { Container, Row, Col } from 'react-bootstrap';
import CSectorSection from './CSectorSection.js'
import CSectors from "./CSectors.js"
import CExperienceSection from './CExperienceSection.js'
import COpenCircle from './COpenCircle.js'
import CToronto from './CToronto.js'




class PLanding extends Component {
  constructor(props) {
    super(props)
    this.state = { width: window.innerWidth };
    document.documentElement.setAttribute("data-theme", "dark");
  }


  componentDidMount() {
    window.scrollTo(0, 0);
    analytics.logEvent("Landing Did Mount");

    var aniDiv = document.getElementById('aniDivLanding');
    var aniDivText = document.getElementById('landingText')

    function transformAnimation(e) {
      var xPos = (e.clientX - aniDiv.offsetWidth / 2) / 30
      var yPos = (e.clientY - aniDiv.offsetHeight / 2) / 30
      var translate3dValue = "translate3d(" + xPos + 'px,' + yPos + 'px,0)';
      aniDiv.style.transform = translate3dValue;
    }

    aniDivText.addEventListener("mousemove", transformAnimation, true);
    aniDiv.addEventListener("mousemove", transformAnimation, true);
    window.addEventListener("resize", this.handleResize.bind(this));
  }


  handleResize(e) {
    console.log('resize')
    this.setState({ width: window.innerWidth })
  };

  componentWillUnmount() {
  }


  render() {

    var aniHeight;
    var aniWidth;
    var aniMargin;
    var txtMargin;
    var paraMargin;

    if (this.state.width < 576) {
      console.log("576")
      aniHeight = "100vh"
      aniWidth = "130vw"
      aniMargin = "-40vh"
      txtMargin = "12vh"
      paraMargin = "40vh"
    } else if (this.state.width < 1000) {
      console.log('768')
      aniHeight = "80vh";
      aniWidth = "130vw";
      aniMargin = "-40vh";
      txtMargin = "15vh"
      paraMargin = "30vh"
    } else if (this.state.width < 1100) {
      console.log('768')
      aniHeight = "90vh";
      aniWidth = "130vw";
      aniMargin = "-40vh";
      txtMargin = "10vh"
      paraMargin = "35vh"
    } else {
      console.log('large')
      aniHeight = "100vh"
      aniWidth = "130vw"
      aniMargin = "-20vh"
      txtMargin = "15vh"
      paraMargin = "55vh"
    }



    return (
      <div>
        <Container>
          <Row className="justify-content-center" style={{ position: "relative", zIndex: 0 }}>
            <h1 id="landingText" style={{ zIndex: 2, position: "absolute", marginTop: txtMargin, overflow: 'hidden' }} className=''>Innovation is just<br /> the beginning.</h1>
            {/* <animated.h1 style={animation}>Innovation is just<br/> the beginning</animated.h1> */}

            <LottieAnimation aniData={aniLinesData} id="aniDivLanding" height={aniHeight} width={aniWidth} style={{ zIndex: 1, position: "relative", marginTop: aniMargin }} />
            <p style={{ zIndex: 2, position: "absolute", marginTop: paraMargin, overflowX: 'hidden', textAlign: "center" }} >Circle is a new-age innovation company dedicated to bringing opportunities for students and empowering them to become the leaders of tomorrow. With an interdisicplinary focus, we aspire for students of multiple sectors to come together and create for the future.</p>


          </Row>
          <hr />
        </Container>

        <Container>
          <div style={{ marginTop: 30 }}>

            <div className="justify-content-center">
              <p style={{ textAlign: 'center' }}>SECTOR</p>
              <h2>All 4 One.</h2>
              <Row className="justify-content-center">
                <Col lg="8">
                  <p style={{ textAlign: 'center' }}>Designed with core sectors in mind, Circle integrates science, technology, business, and social science to bring solutions to the issues we face today.</p>
                </Col>
              </Row>
            </div>
            <Row className="justify-content-center" style={{ marginTop: 30 }}>
              <Col lg="6" md="6" sm="12">
                <span className="pull-right">
                  <CSectors title="Business" sector="Biz" styleAnimation={{ transform: 'scaleX(-1)', marginLeft: -120, }} height="60px"></CSectors>
                </span>
              </Col>
              <Col lg="6" md="6" sm="12">
                <CSectors title="Technology" sector="Tech" styleAnimation={{ marginLeft: -120, }} height="60px"></CSectors>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col lg="4" md="6" sm="12">
                <span className="pull-right">
                  <CSectors title="Social Science" sector="SSci" styleAnimation={{ marginLeft: -130, }} height="60px"></CSectors>
                </span>
              </Col>
              <Col lg="4" md="6" sm="12">
                <CSectors title="Science" sector="Sci" styleAnimation={{ marginLeft: -130, }} height="60px"></CSectors>
              </Col>
            </Row>

          </div>
        </Container>
        {/* <CSectorSection /> */}
        <CExperienceSection />
        <COpenCircle />
        <CToronto />
      </div>

    );
  }
}

export default PLanding;
