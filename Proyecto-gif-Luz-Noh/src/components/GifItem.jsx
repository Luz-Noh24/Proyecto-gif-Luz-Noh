//import React from 'react';
import PropTypes from 'prop-types';
// Definimos un componente funcional llamado GifItem que toma title, url e id como props
export const GifItem = ({ title, url }) => {
    // Devolvemos el JSX que se renderizará
    return (
        // Creamos un div con la clase card
        <div className="card">
            {/* // Mostramos una imagen con src establecido a url y alt establecido a title
    */}
            <img src={url} alt={title} />
            {/* // Mostramos el título de la imagen */}
            <p>{title}</p>
        </div>
    )
}
GifItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
};

export default GifItem;