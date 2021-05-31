import React, { useState, useEffect} from 'react'

import {csv} from 'd3';
import csvfile from './20_cities.csv'

import {CountryForm, TruckForm} from './InputForms'

/*function getCities(data, country) {

    let cities = [];
  
    data.forEach(item => {
      if (item.country === country) {
        cities.push(item);
      }
    })
  
    return cities
}*/

class DataHandler extends React.Component {


    constructor(props) {
        super(props)

        this.state = {
            country: '', 
            trucks: 0, 
            csvdata: {},
            cities: []
        }
        this.c_handleChange = this.c_handleChange.bind(this);
        this.c_handleSubmit = this.c_handleSubmit.bind(this);
        this.t_handleChange = this.t_handleChange.bind(this);
        this.t_handleSubmit = this.t_handleSubmit.bind(this);
        this.getCities = this.getCities.bind(this);
    }

    componentDidMount() {
        csv(csvfile).then(data => {
            this.state.csvdata = data
        })
    }

    getCities() {

        this.state.cities = []
      
        this.state.csvdata.forEach(item => {
            
            if (item.country === this.state.country) {
                this.state.cities.push(item);
            }
        })
    }

    // Event handlers for the country input
    c_handleChange(event) {
        this.setState({country: event.target.value});
    }

    c_handleSubmit(event) {
        this.getCities()
        console.log(this.state.cities)
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