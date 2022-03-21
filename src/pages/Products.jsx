import React from 'react'
import { productState, cartState } from '../stores/products/atom';
import { Link } from "react-router-dom";
import { useRecoilState, useRecoilValue } from 'recoil';
import '../style/Products.css';

function Products() {
    const productList = useRecoilValue(productState);
    const [cartItems, setCartItems] = useRecoilState(cartState);
    console.log(productList)
    console.log(cartItems)

    function addItem(productId) {
        setCartItems((prevCartState) => {
            const newState = [...prevCartState]
            const index = newState.findIndex((value) => value.id == productId);
            if (index == -1) {
                newState.push({ id: productId, amount: 1 })
            }
            else {
                const newAmount = newState[index].amount + 1;
                newState[index] = { ...newState[index], amount: newAmount };
            }
            return newState
        });
    };

    const products = productList.map((product) => (
        <section className="listItem" key={product.id}>
            <Link to={`/products/${product.id}`}><div className='imageContainer'>
                <img src={product.image} />
            </div>
                <div className='headline'>
                    <h2>{product.title}</h2>
                    <h4>{product.price}kr</h4>
                </div></Link>
            <nav>
                <button className="add" onClick={() => addItem(product.id)}>Lägg till</button>
            </nav>
        </section>
    ))

    return (
        <main className='mainProduct'>
            <h1>Våra produkter</h1>
            <div className="productList">
                {products}
            </div>
        </main>
    )
}

export default Products