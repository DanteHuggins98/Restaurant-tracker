import { Navbar, Container, Nav} from 'react-bootstrap';
import { useState, useEffect } from "react";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, seScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        seScrolled(true);
      } else {
        seScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };
  return (
    <>
      <Navbar
        bg="primary"
        variant="dark"
        className={scrolled ? "scrolled" : ""}
      >
        <Container>
          <Navbar.Brand href="#casa">Restaurant Finder</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              href="#casa"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#restaurants"
              className={
                activeLink === "restaurants"
                  ? "active navbar-link"
                  : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("restaurants")}
            >
              Restaurants
            </Nav.Link>
            <Nav.Link
              href="#friends"
              className={
                activeLink === "friends" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("friends")}
            >
              Friends
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
