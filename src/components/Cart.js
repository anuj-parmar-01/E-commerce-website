import React, { Component } from 'react'
import Fade from "react-reveal/Fade"

export default class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showCart: false,
            name:"",
            email:"",
            address:""
        }
    };

    handleSubmit=(e)=>{
        this.setState({
         [e.target.name]:e.target.value
        })
    }

    render() {
        console.log(this.props.cart)

        return (
            <div className="cart-items">
                {this.props.cart.length > 0 ? <div> you have {this.props.cart.length} items in your cart</div> :
                    <div> you have 0 items in your cart</div>}

                <div className="">
                    
                    <ul className="cart-list">
                        {this.props.cart.map(product =>
                           <Fade left> <li>
                                <div className="cart-image">
                                    <img src={product.image} alt={product.title}></img>
                                </div>
                                <div >
                                    <div>
                                        {product.title}
                                    </div>
                                    <div>
                                        {product.count}X{` Rs.${product.price}`}
                                        <button onClick={() => this.props.remove(product)}>Remove</button>
                                    </div>

                                </div>
                            </li>
                            </Fade>)}
                    </ul>
                     
                </div>
                <div>
                    Total Rs.{this.props.cart.reduce((a, b) => a + (b.price * b.count), 0)}
                    <button className="Proceed" onClick={() => this.setState({ showCart: true })}> Proceed</button>
                </div>
                {this.state.showCart && (
                    <div >
                        <Fade right cascade>
                        <form className="form" autoComplete="off" onSubmit={this.handleSubmit}>
                            <ul className="form-container">
                             <Fade right cascade>  <li>
                                    <label>Email</label>
                                    <input name="email" type="email"></input>
                                </li>
                                <li>
                                    <label>Name</label>
                                    <input name="name" type="text"></input>
                                </li>
                                <li>
                                    <label>Address</label>
                                    <input name="address" type="text"></input>
                                </li></Fade>
                            </ul>
                          <button type="submit">Place Order</button>

                        </form>
                        </Fade>
                    </div>
                )}






            </div>

        )
    }
}
