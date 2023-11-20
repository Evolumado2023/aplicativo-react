import Nav from 'react-bootstrap/Nav';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import SoftSkills from './softSkills/SoftSkills';
import HardSkills from './hardSkills/HardSkills';
import Experiencias from './trajetoriaProfessional/Experiencias';

function Navbar() {
  return (
    <div className='container'>
        <Nav>
            <Nav.Item>
                <Link to='/'>Home</Link>
            </Nav.Item>

            <Nav.Item>
              <Link to='/soft'>Soft Skills</Link>
            </Nav.Item>

            <Nav.Item>
              <Link to='/hard'>Hard Skills</Link>
            </Nav.Item>

            <Nav.Item>
              <Link to='/exp'>Experiências</Link>
            </Nav.Item>  
        </Nav>

        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/soft' element={<SoftSkills />} />
          <Route exact path='/hard' element={<HardSkills />} />
          <Route exact path='/exp' element={<Experiencias />} />
        </Routes>
    </div>
  );
}

export default Navbar;