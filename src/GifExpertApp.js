//Componente

import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {


    const [categories, setCategories] = useState(['Lilo and stich']);
   // const handleAdd = () => {
       //setCategories( [...categories,'Car' ]); //para agregar una nueva categoria 1 opcion

       //otra opcion
      // setCategories (cats => [...categories,'Car' ]);

    //}

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr/>

            

            <ol>
                {
                    categories.map( category => (
                        <GifGrid  
                            key={ category }
                            category={ category} 
                        />
                        // <li key={ category }> {category} </li> 
                    ))

                }
                
            </ol>


        </>
    )
}
