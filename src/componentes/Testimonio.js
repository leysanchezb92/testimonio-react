import React from "react";
import "../styles/Testimonio.css";

export default function Testimonio(props){
  return(
    <div className="contenedor-testimonio">
      <img
        className="imagen-testimonio"
        alt={`Foto de ${props.nombre}`}
        src={require(`../images/testimonio-${props.imagen}.png`)}
      />
      <div className="contenedor-texto-testimonio">
        <p className='nombre-testimonio'>{props.nombre} in {props.pais}</p>
        <p className='cargo-testimonio'>{props.cargo} at {props.empresa}</p>
        <p className='texto-testimonio'>"{props.testimonio}"</p>
      </div>
    </div>
  );
}