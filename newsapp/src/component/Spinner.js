import React from 'react'
import loading from './loading.gif'
const spinner = () => {
    return (
      <div className='text-center'>
        
         <img src={loading} alt="loading"  />
        <h2 className='text-center'>Loading...</h2>
      </div>
     
    )
  
}

export default spinner
