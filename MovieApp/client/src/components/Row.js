import React, { useState, useEffect } from 'react';
import instance from '../axios';
import '../Row.css';
const Row = (props) => {
    const { title, request, isLargeRow, id } = props;
    const [movies, setMovies] = useState([]);
    const base_url = "https://image.tmdb.org/t/p/original";
    useEffect(() => {
        instance.get(request)
            .then(list => {
                console.table(list.data.results);
                setMovies(list.data.results);
            })
            .catch(err => console.log(err))
    }, [request])
    return (
        <div className='row_wrapper'>
            <h2>{title}</h2>
            <div className="row">
                <button onClick={(e) => { document.getElementById(id).scrollLeft -= document.getElementById(id).offsetWidth }} className={`scroll_button_left ${isLargeRow && "big_button"}`}>{"<"}</button>
                <div id={id} className="row_items">
                    {
                        movies.length > 0 ?
                            movies.map((movie, index) => {
                                return (
                                    <img key={index} className={`row_item ${isLargeRow && "row_itemLarge"}`} src={isLargeRow ? `${base_url}${movie.poster_path}` : `${base_url}${movie.backdrop_path}`} alt={movie.title} />
                                )
                            })
                            : <p>Loading...</p>
                    }
                </div>
                <button onClick={(e) => { document.getElementById(id).scrollLeft += document.getElementById(id).offsetWidth }} className={`scroll_button_right ${isLargeRow && "big_button"}`}>{">"}</button>
            </div>
        </div>
    )
}
export default Row;