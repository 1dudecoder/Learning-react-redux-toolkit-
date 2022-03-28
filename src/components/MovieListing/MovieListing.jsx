import axios from 'axios';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

function MovieListing() {

  const data = useSelector((state) => state.movies);
  const dogs = useSelector((state) => state.movies.dogs);
  console.log(data)


  useEffect(()=>{
    console.log(dogs);
  })

  return (
    <div>

      {data ? data.movies.map((item)=>{
        return (
        <>
        <h1>{item}</h1>
          <h1>{dogs.fact}</h1>
        </>);
      }) : ""
    }

    </div>
    
  )
}

export default MovieListing