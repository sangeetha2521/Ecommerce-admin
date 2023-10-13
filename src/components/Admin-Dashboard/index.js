import React from "react";
import { SearchIcon } from "../Icons/SearchIcon";
import "../Side-bar/Sidebar.css";
import Products from "../Products";

export default function Dashboard() {
  return (
    <div className="flex flex-col w-[80%] mb-10 bg-white scrollbar p-4   overflow-y-scroll  m-10 rounded-lg">
      <div className="p-4 ml-10  ">
        <div className="relative w-[70%]  rounded-2xl shadow-sm">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
            <SearchIcon />
          </span>
          <input type="text" placeholder="Search..." className="pl-10 pr-2 py-3 bg-[#E7E7E780] w-full rounded-2xl " />
        </div>
      </div>
      <Products />
    </div>
  );
}
