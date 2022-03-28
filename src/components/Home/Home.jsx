import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import "./Home.scss";
import MovieApi from "../../common/api/MovieApi";
import { MovieApiKey } from "../../common/api/MovieApiKey";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "../../features/reducers/counterSlice";
import {addmovies, fetchDogMovies} from "../../features/reducers/moviesSlice"

function Home() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  useEffect(() => {
    let arr = ["nitin", "negi", "shivam", "rawat"];
    dispatch(addmovies(arr))
    dispatch(fetchDogMovies())

  },[]);

  return (
    <div className="banner ">
      <h1 className="welcome">Welcome to home</h1>
      <h2>{count}</h2>
      <button
        onClick={() => {
          dispatch(increment())
        }}
      >
        +
      </button>
          <br />
          <br />
          <br />
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        -
      </button>
      <MovieListing />
    </div>
  );
}

export default Home;
