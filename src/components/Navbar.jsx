import React from 'react'
import './styles/Navbar.css'

const Navbar = ({handleClickShowModal}) => {

  
  return (
    <nav className='Navbar'>
      <h1 className='Navbar__title'>Users CRUD</h1>
      <button className='Navbar__btn' onClick={handleClickShowModal}><i className='bx bx-cross'></i>Create new user</button>
    </nav>
  )
}
export default Navbar
