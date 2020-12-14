import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    const petDivs = this.props.pets.map(petDetail => <Pet pet={petDetail} onAdoptPet={this.props.onAdoptPet} key={petDetail.id} />)
    return <div className="ui cards">{petDivs}</div>
  }
}

export default PetBrowser
