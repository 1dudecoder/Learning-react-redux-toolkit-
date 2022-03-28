import "./App.scss";
import PageNotFound from "./components/PageNotFound/PageNotFound"
import Home from "./components/Home/Home"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import MovieDetails from "./components/MovieDetails/MovieDetails"

import { BrowserRouter , Routes ,Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Routes>
      <Route exact path="/" element={<Home />} />  
      <Route  path="/movie/:imdbID" element={<MovieDetails />} />  
      <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
