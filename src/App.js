import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Country from "./components/Country/Country";
import Cart from "./components/Cart/Cart";

function App() {
  const [countries, setCountries] = useState([]);

  const [cart, setCart] = useState([]);

  const handleAddCountry = (country) => {
    const newCart = [...cart, country];
    // console.log(newCart);
    setCart(newCart);
  };

  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
    // .then((data) => console.log(data));
  }, []);
  return (
    <div className="App">
      <h2>Country loaded: {countries.length}</h2>
      <h3>Country added: {cart.length}</h3>
      <Cart cart={cart}></Cart>
      {countries.map((country) => (
        <Country
          country={country}
          handleAddCountry={handleAddCountry}
          key={country.alpha3Code}
        ></Country>
      ))}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
