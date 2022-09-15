import { Container, Row, Col } from "react-bootstrap";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
          {/* <MailchimpForm /> */}
          <Col sm={6}>{/* <img src={dante} alt="logo" href="#casa" /> */}</Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/dante-huggins-525096211">
                {/* <img src={navIcon1} alt="Icon" /> */}
              </a>
              <a href="https://www.facebook.com/dante.huggins.39/">
                {/* <img src={navIcon2} alt="Icon" /> */}
              </a>
              <a href="https://www.instagram.com/iamdante_98/">
                {/* <img src={navIcon3} alt="Icon" /> */}
              </a>
            </div>
            <p>
              Copyright 2022. All Rights Reserved by Danté L. Huggins.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
