import { use } from "react";
import MovieCard from "../components/movieCard";
import { useState } from "react";
import "../css/Home.css"

function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const movies = [
    { id: 1, title: "Breaking Bad", release_date: "2010" },
    { id: 2, title: "Ransom", release_date: "2013" },
    { id: 3, title: "Joker", release_date: "2022" },
    {id: 4, title: "Legacy", release_date: "2018"},
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    alert(searchQuery);
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search">
        <input
          type="text"
          placeholder="Search for movie"
          className="search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <button type="submit" className="search-button">
          {" "}
          Search{" "}
        </button>
      </form>

      <div className="movies-grid">
        {movies.map(
          (movie) =>
            movie.title.toLowerCase().startsWith(searchQuery) && (
              <MovieCard movie={movie} key={movie.id} />
            )
        )}
      </div>
    </div>
  );
}

export default Home;
