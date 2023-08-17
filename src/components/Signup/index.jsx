import React from 'react'
import ReactDOM from 'react-dom';

const SignUp = ({closeModal}) => {
  
    return ReactDOM.createPortal(
        <>
        <div className='fixed  inset-0 bg-slate-400 bg-opacity-50'></div>
        <div className= ' fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-8 py-12 rounded-md'>
          <div className=' relative flex gap-2 flex-col'>
            <h1 className='text-center'> Sign Up</h1>
            <div className='  flex-col'>
             
              <form onSubmit={closeModal} className='flex flex-col gap-2'>
                <label  className='flex gap-1'>
                  First Name
                  <input type="text" name='firstName' className=' focus:outline-none border-b-2'/>
                </label>
                <label className='flex gap-1'>
                  Last Name
                  <input type="text" name='lastName ' className=' focus:outline-none border-b-2'/>
                </label>
                <input type="submit" value="submit"/>

              </form>
            </div>
            <button onClick={closeModal} className='absolute -top-10 right-0 '> X</button>
          </div>
        
        </div>   
     </>,
     document.querySelector(".myPortal")
    )
}

export default SignUp