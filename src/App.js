import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Square from "./pages/Square";
import NoPage from "./pages/NoPage";
/* global fetch */


   /* class App extends React.Component {
      constructor(props) {
        super(props);
        this.state = {value: '', cities:[{"city":"Provo"},{"city":"Lindon"}]};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      
    
      handleChange(event) {
        // alert('A name was changed: ' + event.target.value);
        this.setState({value: event.target.value});
        var url = "https://csonline.byu.edu/city?q=" + event.target.value;
        console.log("URL " + url);
        fetch(url)
          .then((data) => {
            return (data.json());
          })
          .then((citylist) => {
            console.log("CityList");
            console.log(citylist);
            this.setState({cities:citylist})
            console.log(this.state.cities);
          });    
      }
    
      handleSubmit(event) {
        // alert('A name was submitted: ' + this.state.value); 
        event.preventDefault();
      }
    
      render() {
        const listItems = this.state.cities.map((cityname) => 
          <li key={cityname.city}>{cityname.city}</li>
        );
        
        
        return (
            <div>
            <form onSubmit={this.handleSubmit} onKeyUp={this.handleChange}>
            <label>
              Name:
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
            </form>
            <ul>{listItems}</ul>
            </div>
            
        );
      }
    } 

export default App; */

export default function App() {
  return (
    <BrowserRouter basename="/react-app-cities/build">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="contact" element={<Contact />} />
          <Route path="square" element={<Square />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
