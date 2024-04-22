import React, { useState } from "react";
import { BorderIcon } from "../Icons/borderIcon";
import { Product } from "../common";
import { TrashIcon } from "../Icons/deleteIcon";
import Modal from "../model.js/index.js";
import DeleteModal from "../model.js/DeleteModel";

export default function Products() {
  const [isOpen, setOpen] = useState(false);
  const [isDeleteOpen, setDeleteOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openModal = (product) => {
    setSelectedProduct(product);
    setOpen(true);
  };

  const openModalForDelete = (product) => {
    setSelectedProduct(product);
    setDeleteOpen(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setOpen(false);
    setDeleteOpen(false);
  };

  return (
    <div className="h-screen m-4">
      <div className="p-2">
        <span className="flex ml-10">
          <BorderIcon />

          <h2 className="ml-2 mt-2 text-[#C68A65] text-center font-bold">Our Products</h2>
          <button className="flex items-end ml-auto bg-[#C68A65] p-3 text-center text-white font-semibold rounded-2xl ">
            Add New Product
          </button>
        </span>
        <h2 className="m-2 ml-10 first-letter:font-bold text-xl">Explore Our Products</h2>
      </div>

      <div className="grid grid-cols-4 p-2 ml-7">
        {Product.map((item, index) => (
          <div
            key={index}
            className="flex flex-col cursor-pointer bg-gray-100 m-2 p-2 rounded-md group relative"
            onClick={() => openModalForDelete(item)}
          >
            <TrashIcon clas={"w-6 cursor-pointer h-6 ml-auto flex"} onClick={() => openModalForDelete(item)} />
            <img src={item.icon} alt={item.description} />
            <h2 className="font-mono mt-2">{item.description}</h2>
            <h2 className="font-mono mt-2">
              {item.amount}
              <div>
                {Array.from({ length: Math.floor(item.ratings) }, (_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>
            </h2>
            <div className="flex group items-start">
              <button
                className="bg-black p-2 text-white w-full product-button group-hover:block hidden absolute bottom-2 left-1/2 transform -translate-x-1/2"
                onClick={() => openModal(item)}
              >
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>

      {isDeleteOpen && <DeleteModal isOpen={isDeleteOpen} closeModal={closeModal} product={selectedProduct} />}
      {isOpen && <Modal isOpen={isOpen} closeModal={closeModal} product={selectedProduct} />}
    </div>
  );
}
