import React from "react";
import list from "../../public/list.json"
import Carts from "./Carts";
import { Link } from "react-router-dom";
function Course() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
        <div className="mt-28 iems-centr justofy-center text-center ">
            <h1 className="text-2xl md:text-4xl">
              {" "}
              We're delighted to have you {""}
              <span className="text-pink-500">Here!:)</span>
            </h1>
            <p className="mt-12">
              Welcome to our book emporium, where every page holds a new
              adventure waiting to be discovered. Dive into a world of
              literature and find your next favorite read among our curated
              collection of timeless classics, contemporary bestsellers, and
              hidden gems.!"
            </p>
          <Link to ="/"><button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300"> Back</button></Link>
        </div>
        <div className="='mt-12 grid grid-cols-1 md:grid-cols-4">
          {
            list.map((item)=>(
              <Carts key={item.id} item={item}/>
            ))
          }
        </div>
      </div>
    </>
  );
}

export default Course;
