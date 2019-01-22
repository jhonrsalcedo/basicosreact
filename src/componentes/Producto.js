import React, {Component} from 'react';

class Producto extends Component{
    render() {
        // utilizamos el destructuring
        const {nombre, precio} = this.props.producto
        return(
            <div>
                <h2>{nombre}</h2>
                <p>Precio: $ {precio}</p>
                {/* {console.log(this.props)} */}
            </div>
        )
    }
}

export default Producto;