import React from 'react';
import { Link } from 'react-router';
import FilterInput from '../components/FilterInput';
import NewPlaylist from '../components/NewPlaylist';
import axios from 'axios';

class NewPlaylistContainer extends React.Component {
  constructor(){
    super();
    this.state={
      inputValue: '',
      isValid: "",
    }
    this.FormChange = this.FormChange.bind(this);
    this.HandleSubmit = this.HandleSubmit.bind(this);
    this.isValidInput = this.isValidInput.bind(this);
  }

  FormChange(event){
    this.setState({inputValue:event.target.value});
    this.setState({isValid: this.isValidInput(event.target.value)});
  }

  HandleSubmit(event){
    event.preventDefault();
    console.log(this.state.inputValue)
    this.createPlaylist(this.state.inputValue);
    this.setState({inputValue:''});
  }

  createPlaylist(name){
    console.log("createPlaylist executing, ",name);
    axios.post('/api/playlists/', {name})
      .then(res => res.data)
      .then(result => {
	console.log(result) // response json from the server!
  });
  }

  isValidInput(str){
    let isNotEmpty=()=> str.length != 0 ? "" : "Playlist name cannot be empty\n";
    
    let isLessThanSixteenChar=()=> str.length <= 16 ? "" : "Playlist name must be 16 characters or less\n";
   
    return isNotEmpty() + isLessThanSixteenChar();
  }

  render(){
    return (
      <div>
        <NewPlaylist  value={this.state.inputValue}
                      FormChange={this.FormChange}
                      HandleSubmit={this.HandleSubmit}
		      isValid={this.state.isValid}/>
      </div>
    )
  }
}

export default NewPlaylistContainer;
