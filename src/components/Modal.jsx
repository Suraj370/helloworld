import React, {useState} from 'react'
import SignUp from './Signup'

const Modal = () => {
    const [modal, setModal] = useState(false)
    const openModal = () => setModal(true)
    const closeModal = () => setModal(false)
    
 
  return (
    <>
    <button onClick={openModal}> Sign Up</button>
    {modal &&  <SignUp closeModal = {closeModal}/>}
    </>
  )
}

export default Modal