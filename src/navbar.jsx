import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import GTGasLogo from "./gtGasLogo";

const NavBar = () => {
  return (
    <Navbar bg="dark">
      <Container>
        <Navbar.Brand href="#home">
          <GTGasLogo width="50" height="50" />
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default NavBar;
