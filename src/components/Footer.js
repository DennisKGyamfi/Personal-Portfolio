import { Navbar, Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import navIcon4 from '../assets/img/github.svg';
import navIcon5 from '../assets/img/twitter.png'

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            {/* <img src={logo} alt="Logo" /> */}
            <Navbar.Brand href="/">
              <a href="#home" className="logo">Dennis </a> <span className="logoSpan">|| Software Developer</span>
            </Navbar.Brand>
          </Col>

          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" target="_blank" rel="noreferrer" ><img src={navIcon1} alt="Linkdin" /></a>
              <a href="#href" target="_blank" rel="noreferrer"><img src={navIcon2} alt="facebook" /></a>
              <a href="https://www.instagram.com/dionysius_gyamfi/" target="_blank" rel="noreferrer"><img src={navIcon3} alt="Instagram" /></a>
              <a href="https://github.com/DennisKGyamfi"><img src={navIcon4} alt="github" /></a>
              <a href="https://twitter.com/_nanagyamfi"><img src={navIcon5} alt="twitter" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>

        </Row>
      </Container>
    </footer>
  )
}
