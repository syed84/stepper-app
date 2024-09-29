import React, { useState } from "react";
import Progress from "../components/Progress";
import { Link } from "react-router-dom";
import Button from "../components/Button";

function Step2() {
  const [val1, setVal1] = useState("");
  const [val2, setVal2] = useState("");
  const [val3, setVal3] = useState("");
  const [val4, setVal4] = useState("");

  let chkValidation = () => {
    if (val1 === "" || val2 === "" || val3 === "" || val4 === "") {
      alert("Fill out all ");
    } else {
      console.log(
        `Name : ${val1}, Email :${val2}, Number : ${val3}, Details : ${val4}`
      );
    }
  };
  return (
    <>
      <Link to="/">
        <div className="flex justify-between p-5">
          <h5>◀ Go Back</h5> <h5>Exit ✖</h5>
        </div>
      </Link>
      <Progress val="66%" />
      <div className=" bg-gray-50">
        <h2 className=" flex justify-center text-3xl font-bold pt-10 pb-2">
          Step # 2
        </h2>
        <h2 className=" flex justify-center text-3xl font-bold p-2">Details</h2>
        <p className=" flex justify-center text-center pt-2 text-gray-500 ">
          We're thrilled at the bottom opportunity to help you grow your
          business online.
        </p>
        <p className=" flex justify-center pb-6 text-center text-gray-500 ">
          Plesae let us know the best way to reach you.
        </p>

        <div className=" flex flex-col items-center justify-center  ">
          <div className="mb-2 w-4/12">
            <label className="block text-gray-700 text-m font-bold mb-2">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              onChange={(e) => setVal1(e.target.value)}
            />
            <div className="flex h-12">
              <div className="pr-8">
                <label className="block text-gray-700 text-m font-bold mb-2">
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  onChange={(e) => setVal2(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-gray-700 text-m font-bold mb-2">
                  Phone Number
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="phnum"
                  type="number"
                  onChange={(e) => setVal3(e.target.value)}
                />
              </div>
            </div>
            <label className="block text-gray-700 text-m font-bold mb-2 pt-6">
              Anything else you'd like to share?
            </label>
            <input
              className="shadow appearance-none border rounded w-full h-24 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="text"
              type="text"
              onChange={(e) => setVal4(e.target.value)}
            />
          </div>
        </div>
        <div className=" flex flex-col items-center justify-center  ">
          <div onClick={chkValidation}>
            <Link to="/step3">
              <Button btn="Send Request"></Button>
            </Link>
          </div>
        </div>
        <p className="  flex flex-col items-center justify-center text-center text-gray-500 ">
          We promise never to share your information or spam your inbox
        </p>
      </div>
    </>
  );
}

export default Step2;
