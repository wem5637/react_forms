import React from 'react';
import { Link } from 'react-router';
import FilterInput from '../components/FilterInput';
import Artists from '../components/Artists';


class FilterableArtistsContainer extends React.Component {
  constructor(){
    super();
    this.state={
      inputValue: ''
    }
    this.FormChange = this.FormChange.bind(this);
  }

  FormChange(event){
    this.setState({inputValue:event.target.value});
  }

  render(){
    const inputValue = this.state.inputValue;
    const filteredArtists = this.props.artists.filter( artist =>
      artist.name.match(inputValue)
    )

    return (
      <div>
        <FilterInput FormChange={this.FormChange}/>
        <Artists artists={filteredArtists}/>
      </div>
    )
  }
}
export default FilterableArtistsContainer;
