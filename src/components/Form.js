import React, { Component } from 'react';

export default class Form extends Component {

  constructor (props){
    super(props);

    this.state = {
      email : '', 
      errors : {
        email : false
      }
    }
  }

  onChange = (e) => {
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    this.setState({
      email : e.target.value,
      errors : {
        ...this.state.errors,
        email : filter.test(e.target.value)
      }
    })
    console.log(this.state.errors.email)
  }

  render = () => (
    <div className="Form">
      <div class="field">
        <label class="label">Username</label>
        <div class="control has-icons-left has-icons-right">
          <input class="input is-success" type="text" placeholder="Text input" 
          value={this.state.email} 
          onChange={this.onChange}
          />
          <span class="icon is-small is-left">
            <i class="fas fa-user"></i>
          </span>

          <span class="icon is-small is-right">
            <i class="fas fa-check"></i>
          </span>
        </div>
        { 
          <p class="help is-success">This username is available</p>
        }
        { !this.state.errors.email &&
           <p class="help is-danger">This email is invalid</p>
        }
       
      </div>

      <div class="control">
        <button class="button is-link">Submit</button>
      </div>
    </div>
  );
}