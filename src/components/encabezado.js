import { Component } from "react";
import '../App.css'

// Función en clase

class Encabezado extends Component{
    render(){
        return(
            <div className="App-header">
                <h1>{this.props.titulo}:&nbsp;{this.props.numero}</h1>
            </div>
        )
    }
}

export default Encabezado;
