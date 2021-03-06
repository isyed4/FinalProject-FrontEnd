import React from "react";
import CurrencyFormat from "react-currency-format";
import { Link } from "react-router-dom";

function Checkout(props) {
  const displayCartItems = props.cartItem.map((electronic, index) => {
    return (
      <>
        <li>{electronic.name}</li>
        <li>{electronic.price}</li>
        <li>{electronic.rating}</li>
        <img src={electronic.image_url} alt="electronic image" />
        <br/>
        <button onClick={() => props.handleRemoveItem(index)}>
          Remove Item
        </button>
        <br/>
        <br/>
      </>
    );
  });

  return (
    <div className="checkout">
      <div>
        <h2 className="checkout__title">Your Shopping Cart</h2>
        <ul className="displayCartItems">{displayCartItems}</ul>
      </div>

      <div>
        <h2 className="checkout__right">
          <div className="subtotal">
            <CurrencyFormat
              renderText={(value) => (
                <>
                  <p>
                    Subtotal ({props.count} items):
                    <strong>{value}</strong>
                  </p>
                  <small className="subtotal__gift">
                    <input type="checkbox" /> This order contains a gift
                  </small>
                </>
              )}
              decimalScale={2}
              value={props.totalPriceCart(props.cartItem)}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
            />
            <Link to="/payment">
            <button>Proceed to Checkout</button>
            </Link>
          </div>
        </h2>
      </div>
    </div>
  );
}

export default Checkout;
