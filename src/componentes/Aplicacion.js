// se puede importar como destructuring
import React, {Component} from 'react';
import Header from './Header';
import Productos from './Productos';
import Footer from './Footer';
// import React from 'react';
//functional component no se le puede pasar this si no props
// no pudees usar los metodos de ciclo de vida componentDidMount, ComponentDidUpdate y no tienen state no puedes usar refs


//Notas: los props se definen en el componente principal

class Aplicacion extends Component{

    render(){
          // creamos un arreglos de productos
        const productos = [
            {nombre: 'Libro', precio: 200}, 
            {nombre: 'Disco de musica', precio: 100}, 
            {nombre: 'Instrumento Musical', precio: 800}, 
            {nombre: 'Reproducto Musical', precio: 1500}, 
            {nombre: 'Album Ed. Especial', precio: 500} 
        ]
       return (
        <div>
            <Header 
                titulo ='Nuestra Tienda Virtual'
            />
           
            <Productos
                productos={productos}
            />
            <Footer />
        </div>
        );
    }
}

export default Aplicacion;