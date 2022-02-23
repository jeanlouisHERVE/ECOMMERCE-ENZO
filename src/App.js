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
        <Navbar/>
        <FloatingCart/>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/produits" element={<Products/>} />
        <Route path="/produits/:id" element={ProductShowcase} />
        <Route path="/shoppingcart" element={<ShoppingCart/>} />
      </Routes>
    </Router>
  );
}

export default App;
