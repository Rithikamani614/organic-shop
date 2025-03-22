import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Button, Offcanvas } from 'react-bootstrap';
import { Container, Row, Col, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 
import img1 from './images/logo.webp';
import { FaTwitter, FaFacebook, FaPinterest, FaInstagram,  FaEnvelope,  FaShoppingCart, FaSearch, FaBars, FaPhoneSquare, FaMapMarker } from 'react-icons/fa';

function One(){
    const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return(
        <div className='nav2'>
         <Row className="rw1 ">
          <Col  xs={12} sm={12} md={12} lg={12}>
          <Container>
            <div className="d-flex justify-content-between align-items-center nine">
              <img src={img1} alt="" title="Fesho" className="img1" />
              <Navbar expand="lg" className="nav-outer nav1">
                <Navbar.Toggle aria-controls="navbar-nav" className="nav2" />
                <Navbar.Collapse id="navbar-nav">
                  <Nav className="ml-auto ">
                    <Nav.Link as={Link} to="/" className="link1" style={{ color: '#003c38',fontWeight:'600' }}>Home</Nav.Link>
                    <NavDropdown title="Pages" id="pages-dropdown" className="link1">
                      <NavDropdown.Item as={Link} to="/about">About</NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/services">Services</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Shop" id="shop-dropdown" className="link1">
                      <NavDropdown.Item as={Link} to="/products">Products</NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/cart">Cart</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link as={Link} to="/contact" className="link1">Contact</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>

              <div className="outer-box d-flex align-items-center">
                <Button variant="link" className="btn2">
                  <FaSearch style={{ fontSize: '28px', color: '#164333' }} />
                </Button>

                <Link to="/cart">
                  <FaShoppingCart style={{ fontSize: '30px', color: '#164333' }} className="btn3" />
                  <Badge className="count">1</Badge>
                </Link>
                <button className="btn1">SHOP NOW</button>
                <button className="icon1" onClick={handleShow}>
                  <FaBars style={{ fontSize: '25' }} />
                </button>
              </div>
            </div>
          </Container>
        </Col>

        <Offcanvas show={show} onHide={handleClose} placement="end" className="custom-offcanvas">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
              <img src={img1} alt="" title="Fesho" />
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="flex-column">
              <Nav.Link as={Link} to="/" style={{ fontSize: '17px', marginTop: '-7px' }}>Home</Nav.Link>
              <hr style={{ marginTop: '-1px' }} />
              <NavDropdown title="Pages" id="pages-dropdown" style={{ fontSize: '17px', marginTop: '-7px' }} className="custom-dropdown">
                <NavDropdown.Item as={Link} to="/about" className="custom-dropdown-item">About</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/services" className="custom-dropdown-item">Services</NavDropdown.Item>
              </NavDropdown>
              <hr style={{ marginTop: '-1px' }} />
              <NavDropdown title="Shop" id="shop-dropdown" style={{ fontSize: '17px', marginTop: '-7px' }} className="custom-dropdown">
                <NavDropdown.Item as={Link} to="/shop" className="custom-dropdown-item">Products</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/cart" className="custom-dropdown-item">Cart</NavDropdown.Item>
              </NavDropdown>
              <hr style={{ marginTop: '-1px' }} />
              <Nav.Link as={Link} to="/contact" style={{ fontSize: '17px', marginTop: '-7px' }}>Contact</Nav.Link>
            </Nav>
            <hr style={{ marginTop: '-1px' }} />

            <div className="div1">
              <ul className="li3">
                <li>
                  <div style={{ display: 'inline-block' }} className="div4">
                    <FaPhoneSquare style={{ fontSize: '20px', color: '#43aa5c', marginRight: '15px', marginTop: '-55px' }} className="icon2" />
                  </div>
                  <div style={{ display: 'inline-block' }} className="div5">
                    <h5>Phone</h5>
                    <p style={{ color: '#797f7d', fontSize: '14px' }}>+1(307) 776-0608</p>
                  </div>
                </li>
                <li>
                  <div style={{ display: 'inline-block' }} className="div4">
                    <FaEnvelope style={{ fontSize: '20px', color: '#43aa5c', marginRight: '15px', marginTop: '-55px' }} />
                  </div>
                  <div style={{ display: 'inline-block' }} className="div5">
                    <h5>Email</h5>
                    <p style={{ color: '#797f7d', fontSize: '14px' }}>needhelp@company.com</p>
                  </div>
                </li>
                <li>
                  <div style={{ display: 'inline-block' }} className="div4">
                    <FaMapMarker style={{ fontSize: '19px', color: '#43aa5c', marginRight: '15px', marginTop: '-55px' }} />
                  </div>
                  <div style={{ display: 'inline-block' }} className="div5">
                    <h5>Address</h5>
                    <p style={{ color: '#797f7d', fontSize: '13px' }}>88 Brooklyn Golden Street, New York</p>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <ul className="li4">
                <li><FaTwitter style={{ fontSize: '17px', color: '#43aa5c' }} /></li>
                <li><FaFacebook style={{ fontSize: '17px', color: '#43aa5c' }} /></li>
                <li><FaPinterest style={{ fontSize: '17px', color: '#43aa5c' }} /></li>
                <li><FaInstagram style={{ fontSize: '17px', color: '#43aa5c' }} /></li>
              </ul>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
         </Row>
        </div>
    )
};
export default One;