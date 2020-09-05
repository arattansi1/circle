import React, { Component } from "react";
import { Container, Row,Col } from "react-bootstrap";
import CProjectCard from "./CProjectCard";

class POpenCircle extends Component {
  constructor(props) {
    super(props);
    document.documentElement.setAttribute("data-theme", "dark");
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    // analytics.logEvent("Landing Did Mount");
  }

  componentWillUnmount() {}

  render() {
		const styles = {
      header: {
        // marginTop: "25vh",
        textAlign: "center",
      },
      headTxt: {
        marginRight: "10vw",
        marginLeft: "10vw",
        marginTop: 30,
      },
      BGRight: {
        // position: "absolute",
        // zIndex:0,
        backgroundHeight: "40vh",
        backgroundImage: "../assets/openBGRight.png",
        backgroundAttachment: "fixed",
        backgroundPosition: "right",
        backgroundRepeat: "no-repeat",
      },
      BGLeft: {
        position: "absolute",
        zIndex: 0,
        height: "40vh",
      },
      BG: {
        // backgroundImage: 'url("../assets/openBGRight.png")',
        // backgroungPosition: "right center",
        // backgroundRepeat: "no-repeat",
        // backgroundSize: "",

        // position: 'absolute',
        backgroundImage: "url('../assets/openBGLeft.png'), url('../assets/openBGRight.png')",
        backgroundAttachment: "fixed, fixed",
        backgroundPosition: "top left, bottom right",
        backgroundRepeat: "no-repeat, no-repeat",
        backgroundSize: "30vh, 30vh",
        paddingTop: '25vh',
      },
      HIW: {
        backgroundColor: "#1F1F1F",
        padding: 30,
        borderRadius: 40,
        marginTop: 100,
        textAlign: "left",
      },
      HIWTitle: {},
      AP: {
        marginTop: 50,
      },
      submit: {
        marginTop: 25,
      },
      btnSubmit: {
        background:
          "linear-gradient(90.65deg, #3C9FFA -25.2%, #DB00FF 189.89%), #FFFFFF",
        borderRadius: 10,
        border: "none",
        marginLeft: "2vw",
        marginTop: 10,
      },
    };
    return (
      <div style={styles.BG}>
        {/* <img src={'../assets/openBGRight.png'} style={styles.BGRight}/>
        <img src={'../assets/openBGLeft.png'} style={styles.BGLeft}/> */}
        {/* <div style={{marginBottom:'25vh'}}></div> */}
        {/* <div style={styles.BGRight}></div> */}
        <Container style={styles.header}>
          <h6>PROJECT HUB</h6>
          <h1>Open Circle</h1>
          <p style={styles.headTxt}>
            This is your chance to collaborate with other like-minded
            individuals on projects that interest you. You bring the skills, we
            coordinate the process. Select from current available projects or
            submit an idea of your own.
          </p>
          {/* <Row className="justify-content-center" style={styles.header}> */}
          {/* </Row> */}
          <div style={styles.HIW}>
            <Row>
              <h5 style={styles.HIWTitle}>How it Works</h5>
            </Row>
            <Row>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum facilisis purus ac arcu malesuada, nec egestas dolor
                sollicitudin.Description of the project goes here. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Vestibulum
                facilisis purus ac arcu malesuada, nec egestas dolor
                sollicitudin.
              </p>
            </Row>
          </div>

          <div style={styles.AP}>
            <Row>
              <h4 className="pull-left">Available Projects</h4>
            </Row>
            <CProjectCard
              cardKey="1"
              headImg="../assets/teamDesign.png"
              title="Project Design"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum facilisis purus ac arcu malesuada, nec egestas dolor
                sollicitudin.Description of the project goes here. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Vestibulum
                facilisis purus ac arcu malesuada, nec egestas dolor
                sollicitudin."
              sectorList={["Biz", "SSci", "Sci", "Tech"]}
              elegList={[
                "Eligibility 1",
                "Eligibility 2",
                "Eligibility 3",
                "Eligibility 4",
              ]}
              currHiring={true}
              hireLink="http://google.com"
              extraText="Applications close on October 10"
            />
            <CProjectCard
              cardKey="2"
              headImg="../assets/teamEvent.png"
              title="Project Events"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum facilisis purus ac arcu malesuada, nec egestas dolor
                sollicitudin.Description of the project goes here. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Vestibulum
                facilisis purus ac arcu malesuada, nec egestas dolor
                sollicitudin."
              sectorList={["Biz", "Sci", "Tech"]}
              elegList={[
                "Eligibility 1",
                "Eligibility 2",
                "Eligibility 3",
                "Eligibility 4",
              ]}
              currHiring={false}
            />
            <CProjectCard
              cardKey="3"
              headImg="../assets/teamDev.png"
              title="Project Dev"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum facilisis purus ac arcu malesuada, nec egestas dolor
                sollicitudin.Description of the project goes here. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Vestibulum
                facilisis purus ac arcu malesuada, nec egestas dolor
                sollicitudin."
              sectorList={["Biz", "Tech"]}
              elegList={["Eligibility 1", "Eligibility 2"]}
              currHiring={true}
            />
          </div>
          <Row style={{ marginBottom: -50 }}></Row>
          <div style={styles.HIW}>
            <Row>
              <h5 style={styles.HIWTitle}>Submit your own idea!</h5>
            </Row>
            <Row>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum facilisis purus ac arcu malesuada, nec egestas dolor
                sollicitudin.Description of the project goes here. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Vestibulum
                facilisis purus ac arcu malesuada, nec egestas dolor
                sollicitudin.
              </p>
            </Row>
            <Row className="justify-content-center justify-content-lg-start">
              <a
                href="http://www.google.com"
                style={styles.btnSubmit}
                target="_blank"
              >
                <p style={{ marginTop: 10, color: "white" }}>Submit Idea!</p>
              </a>
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}

export default POpenCircle;
