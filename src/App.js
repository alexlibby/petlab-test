import axios from "axios";
import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [query, setQuery] = useState("");
  const [Products, setProducts] = useState([]);
  const [checked, setChecked] = useState(false);
  const [catChecked, setCatChecked] = useState(false);
  const [dogChecked, setDogChecked] = useState(false);
  const [formulaChecked, setFormulaChecked] = useState(false);
  const [chewsChecked, setChewsChecked] = useState(false);
  const [shampooChecked, setShampooChecked] = useState(false);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    const url = `http://localhost:3000/products/`;
    const _Products = await axios
      .get(url)
      .then(({ data }) => data);

    setProducts(_Products);
  };

  const filterSubs = async (subs) => {
    const url = `http://localhost:3000/products?subscription=${subs}`;
    const _Products = await axios
      .get(url)
      .then(({ data }) => data);

    setProducts(_Products);
  };

  const filterTag = async (tag) => {
    const url = `http://localhost:3000/products?tags_like=${tag}`;
    const _Products = await axios
      .get(url)
      .then(({ data }) => data);

    setProducts(_Products);
  };

  const handleSubsChange = () => {
    setChecked(!checked);
    filterSubs(checked);
  }

  const handleCatChange = () => {
    setCatChecked(!catChecked);
    catChecked === true ? filterTag("Cat") : filterTag("");
  }

  const handleDogChange = () => {
    setDogChecked(!dogChecked);
    dogChecked === true ? filterTag("Dog") : filterTag("");
  }

  const handleChewsChange = () => {
    setChewsChecked(!chewsChecked);
    chewsChecked === true ? filterTag("Chews") : filterTag("");
  }

  const handleFormulaChange = () => {
    setFormulaChecked(!formulaChecked);
    setFormulaChecked === true ? filterTag("Formula") : filterTag("");
  }

  const handleShampooChange = () => {
    setShampooChecked(!shampooChecked);
    setShampooChecked === true ? filterTag("Shampoo") : filterTag("");
  }

  return (
    <div className="App">

      <div className="productListTitle">
        <h1>PetLabCo Products</h1>
      </div>

      <div className="productList">
        <div className="filterList">
          <div className="search_form">
            <label>Search Products</label>
            <input
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            ></input>
          </div>

          <p>Filter by Tag:</p>
          <ul>
            <label>
              <input type="checkbox" checked={!catChecked} onChange={handleCatChange} />
              Cat
            </label>
            <li>
              <input type="checkbox" checked={!dogChecked} onChange={handleDogChange} />
              Dog
            </li>
            <li>
              <input type="checkbox" checked={!chewsChecked} onChange={handleChewsChange} />
              Chews
            </li>
            <li>
              <input type="checkbox" checked={!formulaChecked} onChange={handleFormulaChange} />
              Formula
            </li>
            <li>
              <input type="checkbox" checked={!shampooChecked} onChange={handleShampooChange} />
              Dog
            </li>
          </ul>

          <p>Filter by Price:</p>
          <input
            className="price"
            type="textbox"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          ></input>

          <p>Filter by Subscription:</p>
          <label>
            <input type="checkbox" checked={checked} onChange={handleSubsChange} />
            Subscription Available
          </label>
        </div>

        <table class="table table-light">
          <thead>
            <tr>
              <th scope="col">Image</th>
              <th scope="col">Name</th>
              <th scope="col">Vendor</th>
              <th scope="col">Tags</th>
              <th scope="col">Pack</th>
              <th scope="col">Price</th>
              <th scope="col">Subscription</th>
            </tr>
          </thead>
          <tbody>
            {Products.map((product) => {
              return (
                <>
                  <tr>
                    <th scope="row"><img src={product.image_src} alt={product.title} /></th>
                    <td><a href={product.url}>{product.title}</a></td>
                    <td>{product.vendor}</td>
                    <td>{product.tags}</td>
                    <td>{product.option_value}</td>
                    <td>£{product.price}</td>
                    <td>{product.subscription}</td>
                  </tr>
                </>
              );
            })}

          </tbody>
        </table>
      </div >
    </div>
  );
};

export default App;
