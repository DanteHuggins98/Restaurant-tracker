import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import "bootstrap/dist/css/bootstrap.min.css";


function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/#home">Restaurant Finder</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/#home">Restaurants</Nav.Link>
            <Nav.Link href="/#friends">Friends</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;