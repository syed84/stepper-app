import React from "react";
import Progress from "../components/Progress";
import { Link } from "react-router-dom";
import Button from "../components/Button";

function Step3() {
  return (
    <>
    <Link to='/step2'> <div className="flex justify-between p-5"> <h5>◀ Go Back</h5> <h5>Exit ✖</h5></div></Link>
      <Progress val="100%" />
      <div className=" flex flex-col items-center justify-center  bg-gray-50 ">
        <div className="box-content mt-32 h-12 w-12 p-4   bg-gray-200"></div>
        <h2 className="text-3xl font-bold pt-5 pb-2 w-4/12 text-center">
          Your Request for a Proposal Has Been Submitted!
        </h2>
        <p className=" text-gray-500 text-center pb-4 w-4/12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
          posuere quam. Sed pretium nisl ante, eget tincidunt turpis tempus
          vitae. Donec eget lacus et elit fermentum lobortis non a metus.
          Integer risus nulla, feugiat nec risus non, tincidunt dignissim ipsum.
        </p>
        <Link to='/'>
        <Button btn='Return Home'/>
        </Link>
      </div>
    </>
  );
}

export default Step3;
