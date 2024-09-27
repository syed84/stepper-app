import React from "react";

import Progress from "../components/Progress";
import { Link } from "react-router-dom";




function Step1() {
  let clck = (e) => {
    console.log(e.target.value);
  };

  return (
    <>
    <Link to='/'><div className="flex justify-between p-5"> <h5>◀ Go Back</h5> <h5>Exit ✖</h5></div></Link>
      <Progress val="33%"/>

      <div>
        <div className=" flex flex-col items-center justify-center  bg-gray-50">
          <h2 className=" flex justify-center text-3xl font-bold p-6">
            Step # 1
          </h2>
          <div className=" text-2xl font-bold pt-5 pb-2 w-3/12 text-center ">
            What is your monthly digital marketing budget?
          </div>
          <div className=" flex flex-col items-center justify-center ">
           <Link to='Step2'>
           <button
              className=" py-4 m-1 bg-white border rounded-md text-center w-96"
              value="$1,000/mo"
              onClick={clck}
            >
              $1,000/mo
            </button>
           </Link> 
           <Link to='Step2'>
            <button
              className="py-4 m-1 bg-white border rounded-md text-center w-96"
              value="$1,000 - $2,000"
              onClick={clck}
            >
              $1,000 - $2,000
            </button>
            </Link> 
            <Link to='Step2'>
            <button
              className="py-4 m-1 bg-white border rounded-md text-center w-96"
              value="$2,000 - $5,000"
              onClick={clck}
            >
              $2,000 - $5,000
            </button>
            </Link> 
            <Link to='Step2'>
            <button
              className="py-4 m-1 bg-white border rounded-md text-center w-96"
              value="$5,000 - $10,000"
              onClick={clck}
            >
              $5,000 - $10,000
            </button>
            </Link> 
            <Link to='Step2'>
            <button
              className="py-4 m-1 bg-white border rounded-md text-center w-96"
              value="$10,000 - $25,000"
              onClick={clck}
            >
              $10,000 - $25,000
            </button>
            </Link> 
            <Link to='Step2'>
            <button
              className="py-4 m-1 bg-white border rounded-md text-center w-96"
              value="$25,000+"
              onClick={clck}
            >
              $25,000+
            </button>
            </Link> 
          </div>
        </div>
      </div>
    </>
  );
}

export default Step1;
