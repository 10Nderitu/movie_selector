import { createContext, useState, useContext, useEffect } from "react";

const movieContext = createContext()

export const useMovieContext = () => useContext (movieContext)

export const MovieProvider = ({children}) => {

    const [favorites, setFavorites] = useState([])

    useEffect(() => {
        const storedFavs = localStorage.getItem("favorites")

        if (storedFavs) setFavorites(JSON.parse(storedFavs))
    }, [])

    useEffect (() => {
        localStorage.setItem("favorites", JSON.stringify(favorites))
    }, [favorites])

    const addFavorites = (movie) => {
        setFavorites(prev => [...prev, movie])
    }

    const removeFavorites = (movieId) => {
        setFavorites(prev => prev.filter(movie => movie.id !== movieId))
    }

    const isFavorite = (movieId) => {
        return favorites.some(movie => movie.id === movieId)
    }

    const value = {
        favorites,
        addFavorites,
        removeFavorites,
        isFavorite
    }

    return <movieContext.Provider value = {value}>
        {children}
    </movieContext.Provider>
}