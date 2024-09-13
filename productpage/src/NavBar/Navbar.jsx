import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar( { CompanyName, Categorylist } ) {

  //console.log({ Categorylist });
  
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">{CompanyName}</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll >

            {Categorylist.map((menulist) =>(
              <Nav.Link href={menulist.url}>{menulist.name}</Nav.Link>
              
            ))}
            
            {/* <NavDropdown title="Category" id="navbarScrollingDropdown">
            <NavDropdown.Item href="/home">All</NavDropdown.Item>

            {Categorylist.map((product) => (
              <NavDropdown.Item href="#action3">{product.name}</NavDropdown.Item> 
            ))}

              
              <NavDropdown.Item href="#action4"> Another action </NavDropdown.Item>
               
              <NavDropdown.Item href="#action5">Something else here </NavDropdown.Item>
            </NavDropdown> */}
            
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

 
export default NavBar;
