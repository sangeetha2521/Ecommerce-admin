import React from "react";
import { useLocation } from "react-router-dom";
import { CofeeBeansIcon } from "../Icons/cofeeBean";
import { Link, NavLink } from "react-router-dom";
import "./Sidebar.css";
import { dashboardContent } from "../common";

export default function AdminSidebar() {
  const location = useLocation();

  return (
    <div className=" flex w-[20%] scrollbar p-4   overflow-y-scroll  border bg-gray-100 shadow-inner rounded-xl ">
      <div className="">
        <h2 className="flex text-xl font-bold" style={{ fontFamily: "Montserrat Alternates" }}>
          <CofeeBeansIcon />
          Coffeemaker
        </h2>
        <ul className="flex flex-col mt-16 space-y-16 m-2 bg-scroll">
          {dashboardContent.map((item) => (
            <NavLink
              to={item.route ? item.route : item.title}
              className={`flex flex-row items-start space-x-4 ${
                location.pathname.includes(item.title)
                  ? "bg-white border-l-8 py-3 px-1 border-[#d1a184] rounded-md "
                  : ""
              }`}
              key={item.id}
            >
              <span>{item.icon}</span>
              <button>{item.title}</button>
            </NavLink>
          ))}
        </ul>
      </div>
    </div>
  );
}
