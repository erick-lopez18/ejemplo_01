import React from 'react';
import '../App.css';
import PropTypes from 'prop-types'

// Función base

function Body(props){
    return(
        <div className="App-body">
            <h1>{props.nombre}</h1>
            {props.pelis.map(p=><h1 key={p.id}>{p.titulo}</h1>)}
            {JSON.stringify(props.booleano)}
            {props.arreglo.map((a,i,ao)=><h3 key={i}>{a}</h3>)}
            El resultado es {props.funcion(5)}
            <p>{props.objeto.nombre}</p>
            {props.etiqueta}
        </div>
    )
}

export default Body;

// Herramientas de desarrollador (propTypes)
Body.propTypes={
    nombre:PropTypes.string.isRequired,
    pelis:PropTypes.array,
    booleano:PropTypes.bool,
    arreglo:PropTypes.array,
    funcion:PropTypes.func,
    objeto:PropTypes.object,
    etiqueta:PropTypes.object
}

Body.defaultProps={
    nombre:"Daniela",
    arreglo:[9,7,5,4,3]
}