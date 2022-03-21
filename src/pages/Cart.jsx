import React from 'react'
import { productState, cartState } from '../stores/products/atom';
import { useRecoilState, useRecoilValue } from 'recoil';
import '../style/Cart.css';

function Cart() {
  const productsList = useRecoilValue(productState);
  const [cartItems, setCartItems] = useRecoilState(cartState);

  function getProductById(id) {
    const product = productsList.find(
      (product) => product.id === id
    );
    return product;
  }

  function removeCartItem(id) {
    setCartItems((prevCartState) => {
      const newState = [...prevCartState]
      const index = newState.findIndex((value) => value.id == id);
      if (index != -1) {
        const newAmount = newState[index].amount - 1;
        if (newAmount === 0) {
          newState.splice(index, 1)
        }
        else {
          newState[index] = { ...newState[index], amount: newAmount };
        }
      }
      return newState
    });
  }

  const products = cartItems.map((item) => {
    const product = getProductById(item.id)
    return (
      <section className="listItem" key={item.id}>
        <h2>{item.amount}st {product.title}</h2>
        <img src={product.image} />
        <p>{item.amount}x{product.price}={item.amount * product.price}kr </p>
        <button className="CartButton" onClick={() => removeCartItem(item.id)}>Ta bort</button>
      </section>
    )
  })

  const getTotalPrice = () => {
    const initialValue = 0;
    const totalPrice = cartItems.reduce((previousValue, currentItem) => {
      const productInfo = getProductById(currentItem.id);
      const productPriceByAmount = currentItem.amount * productInfo.price;
      return previousValue + productPriceByAmount;
    }, initialValue);
    return totalPrice;
  };

  const totalPrice = getTotalPrice();

  return (
    <main className='mainCart'>
      <section className='CartSection'>
        <h1>Varukorg</h1>
        <p>
          {cartItems.length === 0 && "Din varukorg är tom"}
          {cartItems.length > 0 && `Produkter i korgen: ${cartItems.length}st`}
        </p>
        <p>
          {cartItems.length > 0 && `Summa att betala: ${totalPrice}kr`}
        </p>
        <section className='CartList'>{products}</section>
      </section>
    </main>
  )
}

export default Cart