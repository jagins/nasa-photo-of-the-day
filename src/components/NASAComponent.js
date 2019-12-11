import React, {useState, useEffect} from "react";
import axios from 'axios';
import NASACard from "./NASACard";

function NASAComponent()
{
    const [NASAResponse, setNASAResponse] = useState("");

    useEffect(() =>
    {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=jVfzn1B2at1Vvh5tbkYfngyPdrAANzRxyMNLH7La`)
        .then(response =>
        {
            //console.log(response);
            setNASAResponse(response.data);
            
        })
        .catch(err =>
        {
            console.log("OOPSIES, Something went wrong!", err);
        });
    }, []);
    return (
        <div className="NASA">
            <NASACard
                date={NASAResponse.date}
                title={NASAResponse.title}
                explanation={NASAResponse.explanation}
                imgSrc={NASAResponse.url}/>
        </div>
    )
}

export default NASAComponent;