import React from "react";
import { SearchIcon } from "../Icons/SearchIcon";
import "../Side-bar/Sidebar.css";
import Design from "../Icons/Designs.svg";

export default function UnderConstruction() {
  return (
    <div className="flex flex-col items-center justify-center w-[80%] bg-white p-4 m-10 rounded-lg">
      <img src={Design} alt={""} />
      <h2 className="font-bold text-center text-[#C68A65] text-2xl">Site Under Construction</h2>
    </div>
  );
}
