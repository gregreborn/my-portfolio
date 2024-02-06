import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="bg-dark text-teal mt-5">
            <Container fluid className="text-center text-md-left">
                <Row className="py-4">
                    <Col md="6" className="mt-md-0 mt-3">
                        <h5 className="text-uppercase">Connect with me</h5>
                        <p>Feel free to reach out through any of the platforms below.</p>
                    </Col>
                    <Col md="6" className="mb-md-0 mb-3">
                        <h5 className="text-uppercase">Links</h5>
                        <ul className="list-unstyled">
                            <li>
                                <a href="https://www.linkedin.com/in/gregory-st-facile-2884201a2" style={{ color: 'teal' }}>LinkedIn</a>
                            </li>
                            <li>
                                <a href="mailto:gregorystfa023@gmail.com" style={{ color: 'teal' }}>Email</a>
                            </li>
                            <li>
                                <a href="tel:+15142243490" style={{ color: 'teal' }}>Phone</a>
                            </li>
                        </ul>
                    </Col>
                </Row>
                <div className="text-center py-3" style={{ color: 'teal' }}>
                    © {new Date().getFullYear()} Gregory Ronald St Facile: All rights reserved
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
