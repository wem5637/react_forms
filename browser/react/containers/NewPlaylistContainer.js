import React from 'react';
import { Link } from 'react-router';
import FilterInput from '../components/FilterInput';
import NewPlaylist from '../components/NewPlaylist';


class NewPlaylistContainer extends React.Component {
  constructor(){
    super();
    this.state={
      inputValue: ''
    }
    this.FormChange = this.FormChange.bind(this);
    this.HandleSubmit = this.HandleSubmit.bind(this);
  }

  FormChange(event){
    this.setState({inputValue:event.target.value});
  }

  HandleSubmit(event){
    event.preventDefault();
    console.log(this.state.inputValue)
    this.setState({inputValue:''});
  }

  render(){

    return (
      <div>
        <NewPlaylist  value={this.state.inputValue}
                      FormChange={this.FormChange}
                      HandleSubmit={this.HandleSubmit}/>
      </div>
    )
  }
}

export default NewPlaylistContainer;
