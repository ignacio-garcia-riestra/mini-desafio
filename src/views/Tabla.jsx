import React from "react";
import { Link } from "react-router-dom";
import { dataTabla } from '../assets/dataTabla'

const Tabla = () => {
  return (
    <div className="container head">
      <Link to='/'>
        <button className="btn btn-primary btn-custom">Volver al home</button>
      </Link>
      <h1> TABLA </h1>  
      <table className="table table-striped table-hover table-custom">
        <thead>
          <tr>
            <th scope="col">nombre</th>
            <th scope="col">edad</th>
            <th scope="col">carrera</th>
            <th scope="col">hobbie</th>
          </tr>
        </thead>
        <tbody>
          {dataTabla().map((itemRow, indexRow) => (
            <tr key={indexRow}>
              {Object.values(itemRow).map((itemCell, indexCell) => (
                <td key={indexCell}>{itemCell}</td>
                )
              )}
            </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default Tabla;