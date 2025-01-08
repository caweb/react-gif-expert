import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);
    const onAddCategory = ( newCategory ) => {
        // categories.push('Valorant'); // Esto no funciona no usar push
        // console.log(newCategory);
        if ( categories.includes(newCategory) ) return;
        setCategories( [ newCategory, ...categories ] );
        // setCategories( [ 'Valorant', ...categories ] );
        // setCategories( cat => [ ...cat, 'Valorant'] );
    }
    // console.log(categories);

  return (
    <>
        <h1>GifExpertApp</h1>

        <AddCategory 
            // setCategories={ setCategories }
            onNewCategory={ (value) => onAddCategory(value) }
        />
    
        { 
            categories.map( (category ) => (
                <GifGrid 
                    key={ category } 
                    category={ category } />
            ))
        }
        
    </>
  )
}
