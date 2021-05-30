import React from 'react'
import {CountryForm, TruckForm} from './InputForms'

class DataHandler extends React.Component {
    constructor(props) {
        super(props)

        this.state = {country: '', trucks: 0}
        this.c_handleChange = this.c_handleChange.bind(this);
        this.c_handleSubmit = this.c_handleSubmit.bind(this);
        this.t_handleChange = this.t_handleChange.bind(this);
        this.t_handleSubmit = this.t_handleSubmit.bind(this);
    }

    // Event handlers for the country input
    c_handleChange(event) {
        this.setState({country: event.target.value});
    }

    c_handleSubmit(event) {
        console.log(this.state.country)
        event.preventDefault();
    }

    // Event handlers for the vehicle input
    t_handleChange(event) {
        this.setState({trucks: event.target.value});
    }

    t_handleSubmit(event) {
        console.log(this.state.trucks)
        event.preventDefault();
    }

    render() {
        return (
            <div class='data-wrapper'>
                <CountryForm handleChange={this.c_handleChange} handleSubmit={this.c_handleSubmit}/>
                <TruckForm handleChange={this.t_handleChange} handleSubmit={this.t_handleSubmit}/>
            </div>
        )
    }
}

export default DataHandler