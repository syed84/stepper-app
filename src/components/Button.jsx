import React from 'react'

function Button(props) {
  return (
    <>
    <button className="focus:outline-none w-44  text-white bg-green-700 hover:bg-green-800 focus:ring-green-300 font-medium text-sm  px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
          {props.btn}
        </button>
    </>
  )
}

export default Button