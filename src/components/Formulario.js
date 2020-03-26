import React, {useContext, useState} from 'react';
import { CategoriasContext } from '../context/CategoriasContext';

const Formulario = () => {

    const [busqueda, guardarBusqueda] = useState({
        nombre: '',
        categoria: ''
    })

    const { categorias } = useContext(CategoriasContext)
    
    //Funcion para leer los contenidos
    const obtenerDatos = e => {
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : [e.target.name]
        })
    }

    return ( 
        <form
            className="col-12   "
        >
            <fieldset className="text-center"> 
                <legend>Busca bebida por Categoría o Ingrediente </legend>
            </fieldset>
            <div className="row mt-4">
                <div className="col-md-4">
                    <input name="nombre" className="form-control" type="text" placeholder="Buscar por ingrediente" onChange={obtenerDatos}></input>
                </div>
                <div className="col-md-4">
                    <select className="form-control" name="categoria" onChange={obtenerDatos}>
                        <option value="">-- Selecciona Categoría --</option>
                        {categorias.map(categoria => (
                            <option key={categoria.strCategory} value={categoria.strCategory}>{categoria.strCategory}</option>
                        ))}
                    </select>
                </div>
                <div className="col-md-4">
                    <input 
                        type="submit"
                        className="btn btn-block btn-primary"
                        value="Buscar Bebidas"
                    />
                </div>
            </div>
        </form>
     );
}
 
export default Formulario;