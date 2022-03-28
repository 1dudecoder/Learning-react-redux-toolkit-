import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//  (simple string identifires , async function )

//thunk async request

export const fetchDogMovies = createAsyncThunk(
  "movies/fetchDogMovies",
  async () => {
    const response = await axios
      .get("https://catfact.ninja/fact")
      .catch((err) => {
        console.log(err, "error found");
      })
      .then((res) => {
        console.log("your response ", res.data);
        return res.data;
      });
      return response
  }
);

const initialState = {
  movies: [],
  dogs: [],
};

export const MoviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addmovies: (state, { payload }) => {
      state.movies = payload;
    },
  },
  extraReducers: {
    [fetchDogMovies.pending]: () => {
      console.log("request in pending");
    },
    [fetchDogMovies.fulfilled]: (state, { payload }) => {
      console.log("request in completed succefully");
      return { ...state, dogs: payload };
    },
    [fetchDogMovies.rejected]: () => {
      console.log("request got rejected");
    },
  },
});

export const { addmovies } = MoviesSlice.actions;
export default MoviesSlice.reducer;
