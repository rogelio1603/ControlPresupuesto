import React from 'react'
import PropTypes from 'prop-types';

//Se escriben los parentesis al final de la arrow function para decir que implicitamente se hace el return de una sola linea.
//Se escriben las llaves cuando se retorna mas de una sola linea.
const Error = ({mensaje}) => (
<p className="alert alert-danger error">{mensaje}</p>
);

Error.propTypes = {
    mensaje: PropTypes.string.isRequired
}

export default Error;