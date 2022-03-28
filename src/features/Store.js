import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "./reducers/counterSlice"
import moviesSlice from './reducers/moviesSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    movies: moviesSlice,
  },
})