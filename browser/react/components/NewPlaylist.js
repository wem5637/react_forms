import React from 'react';
import { Link } from 'react-router';


const NewPlaylist = function (props) {
  console.log("isValid:",props.isValid);
  return (
    <div className="well">
      <form onSubmit ={props.HandleSubmit} className="form-horizontal" >
	<fieldset>
	  <legend>New Playlist</legend>
	  <div className="form-group">
	    <label className="col-xs-2 control-label">Name</label>
	    <div className="col-xs-10">
	      <input value={props.value}
		    onChange={props.FormChange} 
		    className="form-control" type="text"/>
	    </div>
	  </div>
	  <div className="form-group">
	    <div className="col-xs-10 col-xs-offset-2">
	      <button type="submit" 
		      className="btn btn-success"
		      disabled={props.isValid ? false : true}
		      >Create Playlist</button>
	    </div>
	  </div>
	</fieldset>
      </form>
    </div>
  )
}

export default NewPlaylist;
