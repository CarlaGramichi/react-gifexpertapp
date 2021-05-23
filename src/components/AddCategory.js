import React, {useState} from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {
    
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
       // console.log(e.target.value);
       setInputValue(e.target.value);

    }
    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length > 2){ //validacion para no agregar cadena vacia
        setCategories (cats => [inputValue, ...cats ]);
        setInputValue(''); //una vez agregado a la lista borra el valor del input
        }
        

    }


    return (
        <form onSubmit={handleSubmit} >
   
            <input 
                type="text"
                value= { inputValue }
                onChange={ handleInputChange }
            />

        </form>
    )
}


//se usa para establecer que es requerido
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,

};
