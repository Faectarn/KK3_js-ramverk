import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { productState } from "./../stores/products/atom";
import { useRecoilValue } from "recoil";
import '../style/ProductDetail.css';

function ProductDetail() {
  const params = useParams();
  const products = useRecoilValue(productState);
  const [amount, setAmount] = useState(1);
  const product = products.find(
    (product) => product.id === parseInt(params.productId)
  );
  console.dir(amount)
  return (
    <main className="mainPD">
      <Link to="/products/"><button>Tillbaka</button></Link>
      <p>{product.title}</p>
      <section className="detailedSection">
        <img className="detailedImage" src={product.image} />
        <div className="description">
          <h3>{product.description}</h3>
        </div>
      </section>
    </main>
  )
}

export default ProductDetail;