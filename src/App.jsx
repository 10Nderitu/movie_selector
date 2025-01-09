import "./css/App.css";
import Favorites from "./pages/favorites";
import Home from "./pages/home";
import NavBar from "./components/navBar";
import { MovieProvider } from "./contexts/movieContext";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <MovieProvider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;
