import { BrowserRouter as Router, Routes , Route, } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import FloatingCart from './Components/FloatingCart/FloatingCart'
import Home from './Pages/Home/Home';
import Contact from './Pages/Contact/Contact';
import ShoppingCart from './Pages/ShoppingCart/ShoppingCart'
import Products from './Pages/Products/Products';
import ProductShowcase from './Pages/ProductShowcase/ProductsShowcase';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<><Navbar/><FloatingCart/><Home/></>} />
        <Route path="/contact" element={<><Navbar/><FloatingCart/><Contact/></>} />
        <Route path="/produits" element={<><Navbar/><FloatingCart/><Products/></>} />
        <Route path="/produits/:id" element={<><Navbar/><FloatingCart/><ProductShowcase/></>} />
        <Route path="/shoppingCart" element={<><Navbar/><FloatingCart/><ShoppingCart/></>} />
      </Routes>
    </Router>
  );
}

export default App;
