import React, {Component} from 'react';
import Producto from './Producto';

class Productos extends Component{
    render(){
        return(
            <div>
                <h2>Listado Productos</h2>
                {/* para pasarle el arreglo de productos a componentes producto se utiliza this ya que es una clase seguido de props */}
                {console.log(this.props.productos)}
                {/* Para imprimir un objeto se utilizar Object keys para poder iterar en cada una de las llaves */}
                {Object.keys(this.props.productos).map(key =>(
                    <Producto 
                        key ={key}
                        producto = {this.props.productos[key]}
                    />
                ))}
                
            </div>
        )
    }
      
}

export default Productos;