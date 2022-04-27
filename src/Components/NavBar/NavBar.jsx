import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Button, Form, FormControl } from 'react-bootstrap';
import './NavBar.css'

const NavBar = (props) => {


    return ( 
        <div>
           <Navbar bg="light" expand="lg" className='fixed-top'>
                <Container fluid>
                    <Navbar.Brand href="#">Music Library</Navbar.Brand>

                    <Form className="d-flex">
                        <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Container>
            </Navbar>
        </div>
     );
}
 
export default NavBar;
