import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onChangeType = (e) => {
    console.log(e.target.value)
    this.setState({filters: {type: e.target.value}})
  }

  onFindPetsClick = () => {
    let url = '/api/pets'
    if (this.state.filters.type !== 'all') {
      url += `?type=${this.state.filters.type}`
    }
    fetch(url)
    .then(r => r.json())
    .then(data => {
      console.log(data)
      this.setState({ pets: data})
    })
  }

  onAdoptPet = (id) => {
    // This callback should take in an id for a pet
    const newPets = this.state.pets.map(pet => {
      return pet.id === id ? {...pet, isAdopted: true } : pet
    })
    console.log(newPets)
    this.setState({pets: newPets})
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
