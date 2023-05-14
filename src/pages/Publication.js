import React from 'react'
// import header component
 import Header from '../components/Header/Header'
// import publication component
import Publications from '../components/Publications/Publications'
// import home page 

// import css file


const Publication = () => {
  return (
    <div className='publication-body'>
      <Header />
        <Publications />
    </div>
  )
}

export default Publication
