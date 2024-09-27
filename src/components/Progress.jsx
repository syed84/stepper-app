import React from 'react'

function Progress(props) {
  return (
    <>
      <div className="w-full  bg-gray-200 rounded-full h-2.5 mb-4 light-dark:bg-gray-700">
          <div
            className="bg-green-600 h-2.5 full dark:bg-green-500"
            style={{ width: props.val }}
          ></div>
        </div>
    </>
  )
}

export default Progress