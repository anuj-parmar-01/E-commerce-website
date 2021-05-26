import { Component } from 'react'
import "D:/react javascript/shopping-cart/src/index.css"
import Fade from "react-reveal/Fade"
import Modal from "react-modal"
import Zoom from "react-reveal/Zoom"

export default class Products extends Component {
    constructor(props){
        super(props);
        this.state={
            product:null
        }
    }
      openModal=(product,event)=>{
          
       this.setState({
           product:product
       })  ;
       event.preventDefault()

      };

      closeModal=()=>{
          this.setState({
              product:null
          })
      }
    render() {
        const {product}= this.state
        return (
            <div>
            <Fade bottom cascade>
                <ul className="products">
                    {this.props.products.map(product =>
                        <li key={product._id}>
                            <div className="list-contents">
                                <a href="/dress1" onClick={(event)=>this.openModal(product,event)}>
                                    <img src={product.image} alt={product.title}></img>
                                    <p>{product.title}</p>
                                </a>
                            </div>
                            <div className="price-content">
                                <div>  {`Price:Rs.${product.price} `}  </div>
                                <button className="button-primary" onClick={() => this.props.AddToCart(product)}>Add to cart</button>
                            </div>



                        </li>)}
                </ul>
                </Fade>
                {product &&
                <Modal isOpen={true}>
                 
                    <button onClick={this.closeModal}>X</button>
                    <div className="product-details">
                        <img src={product.image} alt={product.title}/>
                        <div  className="Modal">
                        <strong>{product.title}</strong>
                       
                           
                        
                        <div>
                            <p>{product.description}</p>
                            <p>Sizes: {product.availableSizes.map(x=> <span>

                              <button>{x} </button>{` `}
                             
                               
                            </span>
                             
                            )}</p>
                            <p>{`Rs.${product.price}`}</p>
                            <p><button className="Add-button" onClick={()=>this.props.AddToCart(product)}>Add to cart</button></p>
                        </div>
                        </div>
                    </div>
                </Modal>
                }
            </div>
        )
    }
}
