import React from 'react';
import { Link } from 'react-router';
import FilterInput from '../components/FilterInput';
import NewPlaylist from '../components/NewPlaylist';


class NewPlaylistContainer extends React.Component {
  constructor(){
    super();
    this.state={
      inputValue: '',
      isValid: false
    }
    this.FormChange = this.FormChange.bind(this);
    this.HandleSubmit = this.HandleSubmit.bind(this);
    this.isValidInput = this.isValidInput.bind(this);
  }

  FormChange(event){
    this.setState({inputValue:event.target.value});
    this.setState({isValid: this.isValidInput(event.target.value)});
    console.log("isValidInput",this.state.isValid,this.state.inputValue);
  }

  HandleSubmit(event){
    event.preventDefault();
    console.log(this.state.inputValue)
    this.setState({inputValue:''});
  }

  isValidInput(str){
    console.log("VAL:",str);
    let isNotEmpty=()=> str.length === 0 ? false : true;
    
    let isLessThanSixteenChar=()=> str.length <= 16 ? true : false;
    
    return isNotEmpty() &&
           isLessThanSixteenChar();
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
