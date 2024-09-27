import React from 'react'
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
    <div className='m-44 text-6xl  text-center'>
    <h1 className='font-bold text-8xl'>404</h1>
    <h2>Page Not Found</h2>

    </div>
    <Link className='flex justify-center' to='/'>Go Home</Link>
    </>
  )
}

export default NotFound