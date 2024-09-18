import { useState } from "react";
import { NavBar, Container } from "react-bootstrap";


export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    
    return (
    <Navbar expand="lg">
        <Container>
            <Navbar.Brand href="#home">
                <img src={''} alt="Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
                <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
            
        </Container>
    </Navbar>
    
)
}