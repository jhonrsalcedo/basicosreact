import React from 'react';


//Forma Function Component
const Header = (props) =>{
    return (
        <header>
            <h1>{props.titulo}</h1>
        </header>
    );
}


//Forma Class
// class Header extends Component{
//     render(){
//         return (
//             <div>
//             <h1>Titulo Aplicacion</h1>
//             </div>
//         );
//     }
// }


export default Header;