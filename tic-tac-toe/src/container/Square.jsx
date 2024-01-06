import React from 'react'

const Square = ({value, handleOnClic}) => {
  return (
   <button className='square' onClick={handleOnClic}>
    {value}
   </button>
  )
}

export default Square
