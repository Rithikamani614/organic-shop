import 'bootstrap/dist/css/bootstrap.min.css';
import './Nav.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import One from './Nav'
import Home from './Home';
import About from './About';
import Services from './Services';
import Products from './Products';
import Contact from './Contact';
import Cart from './Cart';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
function App() {
  return (
     <div>
    <Router>
      <div>
      <Header />
      </div>
      <div className='ten'>
      <One/>
      </div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
