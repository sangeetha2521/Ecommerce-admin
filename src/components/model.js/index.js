import React, { useState } from "react";

const Modal = ({ isOpen, closeModal, product, updateProduct }) => {
  const [editedProduct, setEditedProduct] = useState(product);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-[#D9D9D9] opacity-50" onClick={closeModal}></div>
      <div className="bg-[#FFFFFF]  p-6 rounded-md z-10 w-[40%]">
        <h3 className="text-lg font-bold text-[#C68A65] text-center">Edit Product</h3>
        <div className="flex justify-between ">
          <h3 className="text-lg font-bold">{editedProduct.description}</h3>
          <button className="text-red-500" onClick={closeModal}>
            Close
          </button>
        </div>
        <label className="mt-10 ">Enter Product description</label>
        <input
          type="text"
          name="description"
          value={editedProduct.description}
          className="w-full border border-gray-300 bg-[#F5F5F5] p-1 rounded-md my-2"
        />
        <label>Enter Product APrice</label>
        <input
          type="text"
          name="amount"
          value={editedProduct.amount}
          className="w-full border border-gray-300 p-1 bg-[#F5F5F5] rounded-md my-2"
        />
        <label>Enter Product Ratings</label>
        <input
          type="number"
          name="ratings"
          value={editedProduct.ratings}
          className="w-full border border-gray-300 bg-[#F5F5F5] p-1 rounded-md my-2"
        />
        <button className="bg-[#C68A65] text-white p-2 rounded-md mt-2">Save Changes</button>
      </div>
    </div>
  );
};

export default Modal;
