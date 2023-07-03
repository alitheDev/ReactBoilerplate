import React, { Component } from "react";

class Message extends Component {
    constructor() {
      super(); //Since we are extending another class, it is mandatory
      //this.state is an object
      this.state = {
          message: "Initial Message"
      }
    }
  
    changeMessage=()=>{
      this.setState(
          {
              message: "Changed Message"
          }
      )
    }
    render() {
      return( 
        <div>
          <h1>
            {this.state.message}
          </h1>
          <button onClick = {() => this.changeMessage()}>Click to change message</button>
        </div>
      )
    }
  }
  
  export default Message