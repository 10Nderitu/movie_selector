import { createContext, useState, useContext, useEffect } from "react";

const movieContext = createContext()

export const useMovieContext = () => useContext (movieContext)

export const MovieProvider = ({children}) => {
    const [favorites, setFavorites] = useState([])

    
    return <movieContext.Provider>
        {children}
    </movieContext.Provider>
}