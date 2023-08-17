import React from 'react'
import Modal from '../Modal'

const Header = () => {
  return (
    <>
    <header className='flex justify-end items-center bg-violet-600'>
      
      <nav>
        <ul className='flex gap-2 p-2'>
          <li>Home</li>
          <li>  <Modal/></li>
        </ul>
      
      </nav>

    </header>
    </>
  )
}

export default Header