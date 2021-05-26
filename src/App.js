import { Component } from "react"
import Cart from "./components/Cart";
import Filter from "./components/Filter";

import Products from './components/Products';
import data from "./data.json"

class App extends Component {
  constructor() {
    super();
    this.state = {
      product: data.products,
      size: "",
      sort: "",
      Cart: []


    }
  };
  filterproducts = (event) => {
    console.log(event.target.value);
    if (event.target.value === "") {
      this.setState({
        size: "",
        product: data.products
      })
    } else {
      this.setState({
        size: event.target.value,
        product: data.products.filter(
          (product) => product.availableSizes.indexOf(event.target.value) >= 0)

      })
    };
  };
  sortproducts = (event) => {
    console.log(event.target.value)
    const sort = event.target.value;
    this.setState({
      sort: sort,
      product: this.state.product.slice().sort(
        function (a, b) {
          if (sort === "Lowest") {
            if (a.price < b.price) {
              return -1
            } else { return 1 }
          }
          else if (sort === "Highest") {
            if (a.price > b.price) {
              return -1
            } else { return 1 }
          }
          else if (sort === "Latest") {
            return 0;
          }
        }

      )

    })
  };

  addtocart = (product) => {
    const Cart = this.state.Cart.slice()
    let presentInCart = false
    Cart.forEach((item) => {
      if (item._id === product._id) {
        item.count++;
        presentInCart = true
      }
    });
    if (!presentInCart) {
      Cart.push({ ...product, count: 1 })
    }

    this.setState({
      Cart: Cart
    })
  };
  Remove=(product)=>{
    const CartItem= this.state.Cart.slice();
    let itemIndex= CartItem.indexOf(product);
    if(product.count>1){
       --product.count;
       this.setState({
         cart:CartItem
       })
    }else if(product.count===1){
      CartItem.splice(itemIndex,1);
      this.setState({
        Cart:CartItem
      })
    }
    }
    
   

  render() {
    return (

      <div className="App">
        <header>
          <a id="a0" href="/">Shopping cart</a>
          <a id="a1" href="/m">Admin</a>
        </header>
        <main>
          <div className="content">
            <div className="main">
              <Filter count={this.state.product.length}
                size={this.state.size} sort={this.state.sort}
                filterProducts={this.filterproducts} sortProducts={this.sortproducts}
              ></Filter>
              <Products products={this.state.product} AddToCart={this.addtocart}></Products>
            </div>
            <div className="cart">
             
                <Cart cart={this.state.Cart}
                      remove={this.Remove}></Cart>
             
            </div>
          </div>
        </main>
        <footer> All rights reserved@2021</footer>
      </div>




    );
  }
}

export default App;
