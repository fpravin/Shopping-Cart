import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Store } from "./pages/Store";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import {Navbar} from "./components/Navbar"
import { GetProducts } from "./data/GetProducts";

function App() {
  return (
    <>
    <Navbar/>   
    <Container className="mb-4">
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/store" element={<Store />} /> */}
        <Route path="/store" element={<GetProducts />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Container>
    </>
  );
}

export default App;
