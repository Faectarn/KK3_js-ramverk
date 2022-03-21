import React from 'react'
import { Link } from "react-router-dom";
import '../style/Home.css';

function Home() {
    return (
        <main className='mainHome'>
            <h2>
                Välkommen till frukostbordet! Här finns allt möjligt gott du kan tänkas behöva till din frukost.
            </h2>
            <button className='homeButton'><Link to="/products">Gå till produktsidan</Link></button>
            <img src="https://imengine.lrf.infomaker.io/?uuid=7de5bfdd-653c-43de-9c6d-acd8c6a15045&type=preview&source=&function=fit&width=630&height=434&q=80&maxsize=630&name=istock-938158500-jpg" />
        </main>
    )
}

export default Home