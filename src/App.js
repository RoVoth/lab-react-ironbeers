import "./App.css";
import Home from "./pages/Home";
import BeerDetails from "./pages/BeerDetails";
import ListOfBeers from "./pages/ListOfBeers";
import NewBeer from "./pages/NewBeer";
import RandomBeer from "./pages/RandomBeer";
import { Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" element={<Home />}></Route>
        <Route path="/beers" element={<ListOfBeers />}></Route>
        <Route path="/beers/:id" element={<BeerDetails />}></Route>
        <Route path="/random-beer" element={<RandomBeer />}></Route>
        <Route path="/new-beer" element={<NewBeer />}></Route>
      </Router>
    </div>
  );
}

export default App;
