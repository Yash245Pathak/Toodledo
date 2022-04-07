import React from 'react'

const Footer = () => {
    const footerStyle={
        width:"100%",
        // top:"85vh",
        position:"relative"
    }
  return (
    <div className='container'>
      <footer  className='bg-dark text-light my-3 pd-3' style={footerStyle}>
      <p className='text-center'>
      Copyright &copy; ToodleDo 
      <br />
      All Rights Reserved
      </p>
        
      </footer>
    </div>
  )
}

export default Footer
