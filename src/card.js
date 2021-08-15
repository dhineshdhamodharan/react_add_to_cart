import React from "react";
import Cartitems from "./cartitems";
function Card(props)
{
    return(
        <div className="col-lg-10 mt-4">
        <div class="card">
          <img src={props.data.img} class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">{props.data.model}</h5>
             <p class="card-text">
               {props.data.description}
            </p> 
            <p class="price">₹{props.data.price}</p>
            <button class="btn btn-primary" disabled={props.disabled(props.data.id)} onClick={()=>{props.handleCart(props.data.id)}}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    )
}
export default Card;