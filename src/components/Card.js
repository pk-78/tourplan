import { useState } from "react";

function Card({id, image, name, price, info, removeTour }){
    const [readmore, setReadmore]= useState(false);
    const description = `${info.substring(0, 190)}`;

    function readMoreHandler(){
        setReadmore(!readmore);
        console.log("I am clicked");
    }

    function handleNotInterested() {
        console.log("Not Interested clicked");
        removeTour(id);
    }

    return (
        <div className="card">
            <img src={image} alt="Failed to load image" className="image" />
            <div className="tour-info">
                <div className="tour-details">
                    <h4 className="tour-name">{name}</h4>
                    <h2 className="tour-price">₹ {price}</h2>
                </div>
                <div className="description">
                    {readmore ? info : description}
                    <span className="read-more " onClick={readMoreHandler}>
                        {readmore ? "...Show Less" : "...Read More"}
                    </span>
                </div>
            </div>
            <button className="btn-red" onClick={handleNotInterested}>Not Interested</button>
        </div>
    );
}

export default Card;
