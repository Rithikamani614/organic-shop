import {  Container, Image} from 'react-bootstrap';
import sec12img1 from './images/banana1.jpg';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';

function Section12() {
  return (
    <div className="section12">
      <div className='sec8bg'>
        <h1 className='sec8h1'>Cart</h1>
        <ul className='sec8ul'>
          <li className='sec8li1'>
            <Link to='/' style={{ color: '#f8ca38', textDecoration: 'none' }} className='link'>
              Home
            </Link>
          </li>
          <li>Cart</li>
        </ul>
      </div>

      <div>
        <Container>
          <Table striped bordered hover size="sm" className='sec12table'>
            <thead>
              <tr className='sec12tr1'>
                <th className='sec12th1'></th>
                <th className='sec12th2'>Photo</th>
                <th className='sec12th3'>Product Name</th>
                <th>Price	</th>
                <th>Quantity</th> 
                <th>Total</th> 
              </tr>
            </thead>
            <tbody>
              <tr className='sec12tr'>
                <td > 
                  <div className='product-remove'>
                  <p className='sec12p1'> ×</p>
                  </div> 
                </td>
                <td>
                  <div>
                    <Image src={sec12img1} className='sec12img1'/>
                  </div>
                </td>
                <td>
                  <p>
                    Winter Black Jacket
                  </p>
                  <span>Size: Medium</span>
                  </td>
                <td>$36.00</td>
                <td>mark@example.com</td>
                <td>$36.00</td> 
              </tr>
              <tr className='sec12tr'>
                <td>
                <div className='product-remove'>
                <p className='sec12p1'> ×</p>
                </div> 
                </td>
                <td>
                <div>
                    <Image src={sec12img1} className='sec12img1'/>
                  </div>
                </td>
                <td>
                <p>
                  Swan Crop V-Neck Tee
                  </p>
                  <span>Size: Small</span>
                </td>
                <td>$115.00</td>
                <td>jacob@example.com</td> 
                <td>$115.00</td>
              </tr>
              <tr className='sec12tr'>
                <td>
                <div className='product-remove'>
                   <p className='sec12p1'> ×</p>
                  </div> 
                </td>
                <td>
                <div>
                    <Image src={sec12img1} className='sec12img1'/>
                  </div>
                </td>
                <td>
                <p>
                Blue Solid Casual Shirt
                  </p>
                  <span>Size: Large</span>
                </td>
                <td>$68.00</td>
                <td>larry@example.com</td> 
                <td>$68.00</td>
              </tr>
            </tbody>
          </Table>
        </Container>
      </div>
    </div>
  );
}

export default Section12;
