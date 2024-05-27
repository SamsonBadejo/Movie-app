import React from "react";

const MovieList = ({ movies }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 gap-4 p-4">
      {movies.map((movie, index) => (
        <div
          key={index}
          className="flex flex-col justify-center items-center bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg hover:scale-105 transform transition duration-300"
        >
          <img
            src={movie.Poster}
            alt={movie.Title}
            className="w-44 h-54 object-cover"
          />
          <div className="p-2">
            <h1 className="text-sm font-semibold mb-1">{movie.Title}</h1>
            <p className="text-gray-600 text-xs">{movie.Year}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
