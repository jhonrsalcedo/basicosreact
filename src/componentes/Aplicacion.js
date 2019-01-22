// se puede importar como destructuring
import React, {Component} from 'react';
import Header from './Header';
import Productos from './Productos';
import Footer from './Footer';
// import React from 'react';
//functional component no se le puede pasar this si no props
// no pudees usar los metodos de ciclo de vida componentDidMount, ComponentDidUpdate y no tienen state no puedes usar refs


//Notas: los props se definen en el componente principal Aplicacion y se llaman desde los otro componentes

class Aplicacion extends Component{

    // manejar los state, se puede utlizar el constructo( no se recomienda sobrecargarlo mucho)
    state ={
        // lo dejamos vacio para simular y luego lo llenamos
        productos:[]
    };

    componentDidMount(){
        const productos = [
            {nombre: 'Libro', precio: 200}, 
            {nombre: 'Disco de musica', precio: 100}, 
            {nombre: 'Instrumento Musical', precio: 800}, 
            {nombre: 'Reproducto Musical', precio: 1500}, 
            {nombre: 'Album Ed. Especial', precio: 500} 
        ]

        setTimeout( () =>{
            this.setState({
                productos: productos
            });
        }, 4000);
    }

    render(){
          // creamos un arreglos de productos
      
       return (
        <div>
            <Header 
                titulo ='Nuestra Tienda Virtual'
            />
           
            <Productos
                productos={this.state.productos}
            />
            <Footer />
        </div>
        );
    }
}

export default Aplicacion;