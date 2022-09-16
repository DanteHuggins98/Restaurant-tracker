import { Container, Row, Col } from "react-bootstrap";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
          <Col sm={6}></Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/dante-huggins-525096211">
              </a>
              <a href="https://www.facebook.com/dante.huggins.39/">
              </a>
              <a href="https://www.instagram.com/iamdante_98/">
              </a>
            </div>
            <p>
              Copyright 2022. All Rights Reserved by Mind Ya Bidness Inc.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
