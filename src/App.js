import "./App.css";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import React from "react";
import Dashboard from "./components/Admin-Dashboard";
import Products from "./components/Products";
import AdminSidebar from "./components/Side-bar";
import UnderConstrucion from "./components/Under-construction";

const APP = () => {
  return (
    <BrowserRouter>
      <div className="flex w-[100%] scrollbar h-screen  overflow-y-scroll bg-[#F1E8E2]">
        <AdminSidebar />
        <Routes>
          <Route
            path="/Ecommerce-admin"
            element={
              <>
                <Dashboard />
              </>
            }
          />
          <Route
            path="/Products"
            index
            element={
              <>
                <Products />
              </>
            }
          />
          <Route
            path="*"
            element={
              <>
                <UnderConstrucion />
              </>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default APP;
