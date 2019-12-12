import React from "react";


function NASACard(props)
{
    return (
        <div className="NASACard">
            <h1>{props.title}</h1>
            <h2>{props.date}</h2>
            <img src={props.imgSrc} alt={props.title}/>
            <p>{props.explanation}</p>
        </div>
    );
}   

export default NASACard;