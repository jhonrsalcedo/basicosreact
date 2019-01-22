import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import Aplicacion from './componentes/Aplicacion';
import * as serviceWorker from './serviceWorker';

// sin JSX
    //   React.createElement(
    // //     'h1',
    // //     {id:'titulo', className: 'encabezado'}, // se le pasan unos objetos como sus propiedadd <h1 id="titulo" class="encabezado">
    // //     'React Hola!'
    // // )
    
    // 'div',
    // null,
    //     React.createElement(
    //       'input',
    //       {type:"text", value: 'Value para el Input'}

    //     )
    //   )
    // se pude hacer un contenedor de dos forma por <div> o <React.Fragment> diferencia que con el react.fragment no contendra div
// const titulo = React.createElement(
//     'h1',
//     {id:'titulo', className: 'encabezado'}, // se le pasan unos objetos como sus propiedadd <h1 id="titulo" class="encabezado">
//     'React Hola!'
// )

// toma dos parametros que y donde, que va a imprimir y donde;
ReactDOM.render(<Aplicacion/> , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
