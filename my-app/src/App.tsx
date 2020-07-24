import React from 'react';
import './App.css';

// Imports for the other components.
import MovieView from './components/MovieView/MovieView';

// Imports for Material UI.
import TextField from '@material-ui/core/TextField';

function App() {
  return (
    <div className="App">
      {/* Using Material UI to create the textfield for entering the movie ID.*/}
      <TextField
        id="outlined"
        style={{ width: "auto", marginLeft: 15, marginTop: 20, marginBottom: 20, marginRight: 15}}
        label="IMDb ID" 
        variant="outlined" 
        size="small" 
        helperText="For testing purposes, feel free to use 'tt2293640' as the ID. Press the 'Enter' key after your input." 
        InputLabelProps={{
            shrink: true,
        }}
        onKeyDown={
          function(event) {
            if (event.keyCode === 13) {
              fetch(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&i=tt2293640&plot=full`)
              .then(response => response.json())
              .then(response => console.log(response))
              .catch(() => console.log("There was an error regarding the API being used. ):"));
            }
          }
        }
      />

      {/* A custom functional component showing all the details about the movie.*/}
      <MovieView 
        posterURL="https://m.media-amazon.com/images/M/MV5BMTg2MTMyMzU0M15BMl5BanBnXkFtZTgwOTU3ODk4NTE@._V1_SX300.jpg"
        title="Minions"
        year="2015"
        runtime="91 min"
        director="Kyle Balda, Pierre Coffinv"
        plot="Ever since the dawn of time, the Minions have lived to serve the most despicable of masters. From the T-Rex to Napoleon, the easily distracted tribe has helped the biggest and the baddest of villains. Now, join protective leader Kevin, teenage rebel Stuart, and lovable little Bob on a global road trip. They'll earn a shot to work for a new boss, the world's first female supervillain, and try to save all of Minionkind from annihilation."
        imdbRating="6.4"  
      />

    </div>
  );
}

export default App;