import { useEffect, useState } from "react"
import { getGifs } from '../helpers/getGifs'

export const useFetchGifs = (category) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    })

    //la instruccion se ejecuta cuando el componente es renderizado por primera vez
    useEffect(() => {

        getGifs(category)
            .then(imgs => {

                setState({
                    data: imgs,
                    loading: false
                })

            })

    }, [category])

    return state
}
