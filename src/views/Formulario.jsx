import React, { useState } from "react";
import { Link } from "react-router-dom";


const Formulario = () => {
  
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [rol, setRol] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInput = (e) => {
    e.preventDefault();
    const value = e.target.value
    e.target.id === 'floatingName' && setNombre(value)
    e.target.id === 'floatingEmail' && setEmail(value)
    e.target.id === 'floatingSelect' && setRol(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true)
  }

  const handleRefresh = () => {
    setIsSubmitted(false)
    setNombre('')
    setEmail('')
    setRol(0)
  }

  return (
    <div className="container head">
      <Link to='/'>
        <button className="btn btn-primary btn-custom">Volver al home</button>
      </Link>
      <h1> FORMULARIO </h1> 
      <form className="table-custom" onSubmit={handleSubmit}>
        <div className="form-floating mb-3">
          <input type="text" className="form-control" id="floatingName" placeholder="name@example.com" onChange={handleInput} value={nombre}/>
          <label htmlFor="floatingName">Nombre Completo</label>
        </div>
        <div className="form-floating mb-3">
          <input type="email" className="form-control" id="floatingEmail" placeholder="name@example.com" onChange={handleInput} value={email}/>
          <label htmlFor="floatingEmail">Dirección de Email</label>
          <div id="emailHelp" className="form-text">No compartiremos esta información con nadie más.</div>
        </div>
        <div className="form-floating">
          <select className="form-select" id="floatingSelect" aria-label="Floating label select example" value={rol} onChange={handleInput}>
            <option value={0}>Elegir una opción</option>
            <option value="Fullstack">Fullstack</option>
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
          </select>
          <label htmlFor="floatingSelect">Rol en el equipo</label>
        </div>
        <button type="submit" className="btn btn-success btn-custom">Enviar</button>
      </form>
      
      {isSubmitted && (
      <div>
        <h2>DATOS CARGADOS</h2>
        <h3>Nombre: <span>{nombre}</span></h3>
        <h3>Email: <span>{email}</span></h3>
        <h3>Rol: <span>{rol}</span></h3>
        <button id='refresh' className="btn btn-warning" onClick={handleRefresh}>Recargar</button>
      </div>
      )}
    </div>
  );
};

export default Formulario;