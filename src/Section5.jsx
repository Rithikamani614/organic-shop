import { Row, Col,Card,Container} from 'react-bootstrap';
import sec5img1 from './images/banana.jpg';
import sec5img2 from './images/2.jpg';
import sec5img3 from './images/3.jpg';
import sec5img4 from './images/4.jpg';
import { FaStar,FaHeart,FaShoppingCart} from 'react-icons/fa';


function Section5(){
    return(
        <div className='sec5'>
            <Container className='sec5container'>
                <p className='sec5p1'>Special Offers</p>
                <h2 className='sec5p2'>Check today’s hot deal <br />
                products
                </h2>
                <Row className='sec5r1'>
                    <Col sm={12} md={6} lg={3} xl={3}>
                     <Card className='sec5card1'>
                        <Card.Img  src={sec5img1} className='sec5card11' />
                        <Card.Body>
                         <Card.Title >
                         <h4 className=' sec5card-title'>Bananas</h4>
                         <p className="sec5p3">$32.00</p>
                         </Card.Title>
                        <Card.Text >
                            <ul className='sec5ul'>
                                <li>< FaStar/></li>
                                <li>< FaStar/></li>
                                <li>< FaStar/></li>
                                <li>< FaStar/></li>
                                <li>< FaStar/></li>
                            </ul>
                            <div className="sec5icon">
                            <div  className='sec5icon1' >
                            <FaHeart className='sec5icon11'/>
                            </div>
                            <div className='sec5icon2'> 
                            <FaShoppingCart className='sec5icon22'/>
                            </div>
                            </div>
                        </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col sm={12} md={6} lg={3} xl={3}>
                     <Card className='sec5card2'>
                        <Card.Img  src={sec5img2} className='sec5card22'  />
                        <Card.Body>
                        <Card.Title >
                         <h4 className=' sec5card-title'>Potatos</h4>
                         <p className="sec5p3">$32.00</p>
                         </Card.Title>
                        <Card.Text >
                            <ul className='sec5ul'>
                                <li>< FaStar/></li>
                                <li>< FaStar/></li>
                                <li>< FaStar/></li>
                                <li>< FaStar/></li>
                                <li>< FaStar/></li>
                            </ul>
                            <div className="sec5icon">
                            <div  className='sec5icon1' >
                            <FaHeart className='sec5icon11'/>
                            </div>
                            <div className='sec5icon2'> 
                            <FaShoppingCart className='sec5icon22'/>
                            </div>
                            </div>
                        </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col sm={12} md={6} lg={3} xl={3}>
                     <Card className='sec5card3' >
                        <Card.Img  src={sec5img3} className='sec5card33' />
                        <Card.Body>
                        <Card.Title >
                         <h4 className=' sec5card-title'>Apples</h4>
                         <p className="sec5p3">$32.00</p>
                         </Card.Title>
                        <Card.Text >
                            <ul className='sec5ul'>
                                <li>< FaStar/></li>
                                <li>< FaStar/></li>
                                <li>< FaStar/></li>
                                <li>< FaStar/></li>
                                <li>< FaStar/></li>
                            </ul>
                            <div className="sec5icon">
                            <div  className='sec5icon1' >
                            <FaHeart className='sec5icon11'/>
                            </div>
                            <div className='sec5icon2'> 
                            <FaShoppingCart className='sec5icon22'/>
                            </div>
                            </div>
                        </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col sm={12} md={6} lg={3} xl={3}>
                     <Card className='sec5card4' >
                        <Card.Img  src={sec5img4} className='sec5card44' />
                        <Card.Body>
                        <Card.Title >
                         <h4 className=' sec5card-title'>Lettus</h4>
                         <p className="sec5p3">$32.00</p>
                         </Card.Title>
                        <Card.Text >
                            <ul className='sec5ul'>
                                <li>< FaStar/></li>
                                <li>< FaStar/></li>
                                <li>< FaStar/></li>
                                <li>< FaStar/></li>
                                <li>< FaStar/></li>
                            </ul>
                            <div className='sec5icon'>
                            <div  className='sec5icon1' >
                            <FaHeart className='sec5icon11'/>
                            </div>
                            <div className='sec5icon2'> 
                            <FaShoppingCart className='sec5icon22'/>
                            </div>
                            </div>
                        </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Section5;