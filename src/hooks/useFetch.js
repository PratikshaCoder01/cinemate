import { useState, useEffect } from "react";

export const useFetch = (apiPath, queryTerm = "") => {
    const [data, setData] = useState([]);
    const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${process.env.REACT_APP_API_KEY}&query=${queryTerm}`
    //const url = `https://api.themoviedb.org/3/movie/${apiPath}?api_key=199c1af1d1a059fca8ef1c6d014ec7e6`

    useEffect(() => {
        async function fetchMovies(){
          const response = await fetch(url);
          const json = await response.json();
          setData(json.results);
        }
        fetchMovies();
      },[url]);

  return { data }
}
