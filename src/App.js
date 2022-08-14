import "./App.css";
import Home from "./pages/Home";
import BeerDetails from "./pages/BeerDetails";
import ListOfBeers from "./pages/ListOfBeers";
import NewBeer from "./pages/NewBeer";
import RandomBeer from "./pages/RandomBeer";
import { Routes, Route } from "react-router-dom";
import HeaderLinkNav from "./components/HeaderLinkNav";

function App() {
  return (
    <div className="App">
      <HeaderLinkNav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/beers" element={<ListOfBeers />}></Route>
        <Route path="/beers/:id" element={<BeerDetails />}></Route>
        <Route path="/random-beer" element={<RandomBeer />}></Route>
        <Route path="/new-beer" element={<NewBeer />}></Route>
      </Routes>
    </div>
  );
}

export default App;
