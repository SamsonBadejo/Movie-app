import { useEffect, useState } from "react";
import "./App.css";
import MovieList from "./components/MovieCard/MovieList";
import Navbar from "./components/Navbar/Navbar";
import Search from "./components/Navbar/Search";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=1753fb32`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    getMovieRequest("superman");
  }, []);

  return (
    <div className="App">
      <Navbar heading='Movie App'>
        <Search searchValue={searchValue} setSearchValue={setSearchValue} onSearch={getMovieRequest} />
      </Navbar>
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
