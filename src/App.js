import { Link, Routes, Route } from "react-router-dom";
import Accounts from "./components/Accounts";
import Catalogue from "./components/Catalogue";
import MovieInfo from "./components/MovieInfo";
const App = () => {
  return (
    <div className="wrapper">
      <header>
        <Link to="/">
          <h1>Hackflix</h1>
        </Link>
      </header>
      
      <Routes>
        <Route path="/" element={ <Accounts /> } />
        <Route path="/catalogue" element={ <Catalogue /> } />
        <Route path="/movie/:movieId" element={ <MovieInfo /> }/>
      </Routes>
      
    </div>
  );
}
export default App;