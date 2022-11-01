import React from 'react'
import './Footer.css'
function SaveResponse() {
  const [userEmail, setUserEmail] = React.useState(' ');
  
  const handleUserEmailChange = (event)=>{
   setUserEmail(event.target.value);
  }

  const handleSubmit = (event)=>{
    event.preventDefault ();
    console.log('userEmail:', userEmail)
   
    

    fetch('https://emailresponse-bc1d2-default-rtdb.asia-southeast1.firebasedatabase.app/message.json',
    {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            userEmail: userEmail
        })
    })
   

}
    return (
    <div>
        <form className='userForm' onSubmit={handleSubmit}>
            <input className='fs-input' id='emailId' placeholder='Your Email' onChange={handleUserEmailChange}></input>
            <button className='fs-button'>Subscribe</button> 
        </form>
    </div>
  )
}

export default SaveResponse