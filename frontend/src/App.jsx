import React from "react";
import Home from "./Home/Home";
import { Route, Routes } from "react-router-dom"
import Courses from "./courses/Courses";
import Signup from "./components/Signup";

export default function App() {
  return (
    <>
      <div  className="dark:bg-slate-900 dark:text-white">
      { /*<Home/>
       <Course/>*/}
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/course" element={<Courses/>}/>
        <Route path="/signup" element={<Signup/>}/>
       </Routes>
      </div>
    </>
  );
}