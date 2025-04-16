import React from 'react'
import Nav from './components/nav'
import { Link } from 'react-router'
const NotFound = () => {
  return (
    <>
    <Nav/>
    <div className='mt-32 w-full flex justify-center items-center font-cormorant text-2xl'>
        <p>Sorry, But the Page your look for, does not exists.</p><br/>
        <Link to={"/"} className='underline'>Please Click Here to Get Back to Home Page</Link>
    </div>
    </>
  )
}

export default NotFound