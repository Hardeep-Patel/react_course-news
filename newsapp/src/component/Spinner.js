import React, { Component } from 'react'
import loading from './loading.gif'
export class spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        
         <img src={loading} alt="loading"  />
        <h2 className='text-center'>Loading...</h2>
      </div>
     
    )
  }
}

export default spinner
