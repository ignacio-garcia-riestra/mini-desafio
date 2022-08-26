import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    
    <header className='head'>
      <h1>Mini desafio</h1>
      <div className="btn-group" role="group" aria-label="Basic mixed styles example">
          <Link to='/tabla'>
            <button type="button" className="btn btn-primary">Tabla</button>
          </Link>
          <Link to='/formulario'>
            <button type="button" className="btn btn-success">Formulario</button>
          </Link>
      </div>
    </header>
  );
}

export default Home;