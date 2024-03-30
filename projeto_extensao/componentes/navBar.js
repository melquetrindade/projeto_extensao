import React, {useState} from "react";
import styles from "../styles/navBar.module.css"

// Importações do Bootstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

export default function NavBar(){

    return(
        <header className={styles.teste2}>
            {['lg'].map((expand) => (
                <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
                <Container fluid className={styles.teste}>
                    <Navbar.Brand href="#" className={styles.title}>Trilha da Raposa</Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                    <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-${expand}`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                    placement="end"
                    >
                    <Offcanvas.Header closeButton className={styles.teste3}>
                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                        Trilha da Raposa
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body className={styles.teste3}>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Nav.Link href="#action1" className={styles.link}>Home</Nav.Link>
                            <Nav.Link href="/testeFor" className={styles.link}>Plantas</Nav.Link>
                        </Nav>
                    </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
                </Navbar>
            ))}
        </header>
    )
}