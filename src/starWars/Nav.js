import React, { Component } from 'react';
import {
  NavLink
} from 'react-router-dom';

class Nav extends Component {
  constructor(props) {
    super(props)

    this.state = {
      vehicles: []
    }
  }

  componentDidMount() {
    const savedStateFromLocalStorage = localStorage.getItem('vehicles')

    if (savedStateFromLocalStorage) {
      this.setState({ vehicles: JSON.parse(savedStateFromLocalStorage) })
      return;
    }
    // Fetch list of vehicles from API
    const url = `https://swapi.dev/api/vehicles/`
    fetch(url)
      .then(response => response.json())
      .then((json) => {
        this.setState({
          vehicles: json.results
        })
        localStorage.setItem('vehicles', JSON.stringify(json.results))
      })

  }

  componentDidUpdate(prevProps, prevState) {
    const prevPropsString = JSON.stringify(prevProps.vehicles)
    const updatedPropsString = JSON.stringify(this.props.vehicles)
    const savedStateFromLocalStorage = localStorage.getItem('vehicles')

    if (prevPropsString !== updatedPropsString) {
      if (savedStateFromLocalStorage) {
        this.setState({ vehicles: JSON.parse(savedStateFromLocalStorage) })
        return
      }
      localStorage.setItem('vehicles', updatedPropsString)
    }
  }

  render() {
    return (
      <ul>
        {
          this.state.vehicles.map((vehicle, index) => {
            const id = vehicle.url.split('/')[5]
            return (
              <li key={index}>
                <NavLink activeStyle={{fontWeight: 'bold'}} to={`/vehicle/${id}`}>
                  {vehicle.name}
                </NavLink>
              </li>
            )
          })
        }
      </ul>
    );
  }
}

export default Nav;