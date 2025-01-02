import './App.css'
import MovieCard from './components/movieCard'

function App() {

  return (
    <>
    <MovieCard movie = {{title:"Movie 1", release_date:"2024"}}/>
    <MovieCard movie = {{title:"Movie 2", release_date:"2024"}}/>
    </>
  )
}

export default App
