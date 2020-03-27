import React, {createContext, useState} from 'react';

export const RecetasContext = createContext()


const RecetasProvider = (props) => {

    const [recetas, guardarrecetas] = useState([])
    const [busqueda, buscarReceta] = useState({
        nombre: '',
        categoria: ''
    })

    return ( 
        <RecetasContext.Provider
            value = {buscarReceta}
        >
            {
                props.children
            }
        </RecetasContext.Provider>
     );
}
 
export default RecetasProvider;