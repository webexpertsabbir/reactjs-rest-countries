import React from 'react';
import './Country.css'

const Country = (props) => {
    // console.log(props.country)
    // const {area, flags} = props?.country;
    // console.log(area)
    return (
        <div className='country-box'>
            <div>
                    <h1>Country Name: {props.country?.name?.common}</h1>
                    <h2>Area: {props.country?.area}</h2>
                    <img src={props.country?.flags?.png} alt="" />
            </div>
        </div>
    );
};

export default Country;