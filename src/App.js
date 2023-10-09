import './App.css';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Encabezado from './components/encabezado';
import Body from './components/body';
import Footer from './components/footer';

class App extends Component{
  render(){
    const edad=18;
    const peliculas=[
      {id:1, titulo:"Titanic", productora:"Fox"},
      {id:2, titulo:"Home alone", productora:"Sony"},
      {id:3, titulo:"Back to the future", productora:"Warner"},
    ]
  return (
    <div className="App">
      <Encabezado
        titulo="Mi ejemplo"
        numero={7}
        />
      <Body
        nombre="Daniela"
        pelis={peliculas}
        booleano={false}
        arreglo={[1, 2, 3, 4, 5, 6]}
        funcion={(num)=>num*2}
        objeto={{nombre:"Daniela", apellido:"Sanchez"}}
        etiqueta={<h1>Hola, esto es un prop</h1>}
      />
      <Footer>
        
      </Footer>
    </div>
    // Footer lo usa children props, Body lo usa propTypes
  );}
}

export default App;
