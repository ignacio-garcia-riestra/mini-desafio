import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from './views/Home';
import Formulario from './views/Formulario';
import Tabla from './views/Tabla';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tabla" element={<Tabla />} />
      <Route path="/formulario" element={<Formulario />} />
    </Routes>
  );
}

export default App;