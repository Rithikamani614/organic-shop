import { FaTwitter, FaFacebook, FaPinterest, FaInstagram, FaMap, FaEnvelope, FaMobile } from 'react-icons/fa';
import { Container, Row, Col } from 'react-bootstrap';

const Header = () => {
  

  return (
    <div className="head">
      <Row className="rw1"> 
      <Col  xs={12} sm={12} md={12} lg={12}>
          <div className="bg">
            <Container>
              <div className="div1">
                <ul className="li1">
                  <li>
                    <FaMap style={{ fontSize: '14px', color: '#f8ca38', marginRight: '10px' }} />
                    88 Brooklyn Golden Street, New York
                  </li>
                  <li>
                    <FaEnvelope style={{ fontSize: '14px', color: '#f8ca38', marginRight: '10px' }} />
                    <p className="p3">needhelp@company.com</p>
                  </li>
                  <li>
                    <FaMobile style={{ fontSize: '14px', color: '#f8ca38', marginRight: '10px' }} />
                    <p className="p3">+1(307) 776-0608</p>
                  </li>
                </ul>
              </div>

              <div className="div2">
                <ul className="li2">
                  <li className="sechli1"><FaTwitter style={{ fontSize: '14px' }} /></li>
                  <li className="sechli1"><FaFacebook style={{ fontSize: '14px' }} /></li>
                  <li className="sechli1"><FaPinterest style={{ fontSize: '14px' }} /></li>
                  <li className="sechli1"><FaInstagram style={{ fontSize: '14px' }} /></li>
                </ul>
              </div>
            </Container>
          </div>
        </Col>
        </Row>
      
    </div>
  );
};

export default Header;
