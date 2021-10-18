import React, { Component } from 'react'
import NavbarComp from './Components/Nav'
import 'bootstrap/dist/css/bootstrap.min.css'
import { commerce } from './lib/Commerce'
import ProductsList from './Components/ProductsList'


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
    };
  
  }

  fetchProducts() {
    commerce.products.list().then((products) => {
      this.setState({ products: products.data });
    }).catch((error) => {
      console.log('There was an error fetching the products', error);
    });
  }

  componentDidMount() {
    this.fetchProducts();
  }

  render() {
    
    const { products, loading } = this.state;
    if (loading) {
      return <p>Loading...</p>;
    }

    return (
      <div className="app">
       
        <h4><NavbarComp /></h4>
        <ProductsList
          products={products}
        />
      </div>
    );
  }
};
 



export default App

