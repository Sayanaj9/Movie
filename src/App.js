import React from 'react';
import './App.css';
import MovieList from "./listing/movielist";
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/movielist.scss';


function App() {
  return (
      <div className="App">
      
              <MovieList/>
        </div>
  );
}

export default App;
