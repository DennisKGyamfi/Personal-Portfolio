import meter1 from "../assets/img/html.png";
import meter2 from "../assets/img/css.png";
import meter3 from "../assets/img/javascript.png";
import bootstrap from "../assets/img/bootstrap.png";
import react from "../assets/img/react.png";
import node from "../assets/img/nodejs.png";
import git from "../assets/img/git.png";
import github from "../assets/img/github.svg";
import figma from "../assets/img/figma.png";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
     
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br/> Lorem Ipsum has been the industry's standard dummy text.</p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <img src={meter1} alt="html" />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="css" />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="javascript" />
                  <h5>JAVASCRIPT</h5>
                </div>
                <div className="item">
                  <img src={bootstrap} alt="bootstrap" />
                  <h5>BOOTSTRAP</h5>
                </div>
                <div className="item">
                  <img src={react} alt="react" />
                  <h5>REACT</h5>
                </div>
                <div className="item">
                  <img src={node} alt="node" />
                  <h5>NODE</h5>
                </div>
                <div className="item">
                  <img src={git} alt="git" />
                  <h5>GIT</h5>
                </div>
                <div className="item">
                  <img src={github} alt="git" />
                  <h5>GITHUB</h5>
                </div>
                <div className="item">
                  <img src={figma} alt="git" />
                  <h5>FIGMA</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="backgrd" />
    </section>
  )
}
