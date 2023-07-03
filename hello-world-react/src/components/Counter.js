import React, { Component } from 'react'

export class Counter extends Component {
  
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }
  
  
    increment(){
        this.state.count({
            count:   this.state.count + 1
        }
        )  
        console.log(this.state.log) 
    }

    render() {
    return (
      <><div>Counter {this.state.count} </div>
      <button onClick={() => this.increment()}> increment </button>
      
      </>
    )
  }
}

export default Counter