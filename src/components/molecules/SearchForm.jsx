
//React core
import React from "react";
import { Link } from "react-router-dom";


export default function SearchForm(parameter) {

    return (
        <div className= {"search-form"}>
            {/*<article className= "input-details">
            <h3>Parcel ID</h3>
            <input placeholder= "'Enter Parcel ID" />
            </article>
             */}
            
            <h3>Click here to
                track your parcels:</h3>
            <Link className="button" to={`result/${parameter}`}>Track</Link>
            
        </div>
    )
}