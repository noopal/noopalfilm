import { Navbar, Container, NavLink, Nav } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <div>
      <Navbar variant="dark">
        <Container>
          <Navbar.Brand href="/">NoopalFilms</Navbar.Brand>
          <Nav>
            <NavLink href="#trending">Trending</NavLink>
            <NavLink href="#superhero">SuperHero</NavLink>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
