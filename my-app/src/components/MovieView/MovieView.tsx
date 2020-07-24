import React from 'react';
import './MovieView.css';

type MovieProps = {
    posterURL: string,
    title: string,
    year: string,
    plot: string,
    runtime: string,
    director: string,
    imdbRating: string
}

function MovieView({posterURL, title, year, plot, runtime, director, imdbRating}: MovieProps) {
    return (
        <div className="container">
            {/* The props needed are Title, Year, Released, Runtime, Director, Plot, imdbRating */}
            <img src={posterURL}></img>
            <h2 className="title">{title}<span className="year"> | Released in {year}</span></h2>
            <hr></hr>
            <p className="plot">{plot}</p>
            <div>
                <div className="property">
                    <p className="propertyName"><span className="key">Director: </span>{director}</p>
                </div>
                <div className="property">
                    <p className="propertyName"><span className="key">Runtime: </span>{runtime}</p>
                </div>
                <div className="property">
                    <p className="propertyName"><span className="key">imDb Rating: </span>{imdbRating}/10</p>
                </div>
            </div>
        </div>
    )
}

export default MovieView;