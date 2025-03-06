import React, { useState } from 'react'
import AddCategory from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Charizard'])

    // const handleAdd = () => {
    //     //setCategories( ['Hunter x Hunter', ...categories ])
    //     setCategories( cat => [...cat, 'Hunter x Hunter'] )
    // }

    return (
        <>
            <h1>Buscador de GIFs</h1>

            <AddCategory setCategories={setCategories} />

            <hr />

            <ol>
                {
                    categories.map(category => (
                        <GifGrid
                            key={category}
                            category={category}
                        />
                    )
                    )
                }
            </ol>
        </>
    )
}
