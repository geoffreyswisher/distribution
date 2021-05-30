import React from 'react'

export const CountryForm = (props) => {

    return (
        <form class='country-form' onSubmit={props.handleSubmit}>        
            <label class='country-label'>
                Country:
                <input class='country-input' type='text' onChange={props.handleChange}/>
            </label>
            <input type="submit" value="Submit" />
        </form>
    );
}


export const TruckForm = (props) => {
    return (
        <form class='truck-form' onSubmit={props.handleSubmit}>
            <label class='truck-label'>
                Number of Delivery Vehicles:
                <input class='truck-input' type='number' onChange={props.handleChange}/>
            </label>
            <input type='submit' value='Submit'/>
        </form>
    )
}

