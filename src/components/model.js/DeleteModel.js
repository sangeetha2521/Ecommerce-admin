import React, { useState } from "react";
import { Link } from "react-router-dom";

const DeleteModal = ({ isOpen, closeModal, product, updateProduct }) => {
  const [editedProduct, setEditedProduct] = useState(product);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-[#D9D9D9] opacity-50" onClick={closeModal}></div>
      <div className="bg-[#FFFFFF]  p-6 rounded-md z-10 w-[40%]">
        <h3 className="text-lg font-bold text-[#C68A65] text-center">Edit Product</h3>

        <div className="p-6 pt-0 text-center">
          <svg
            className="mx-auto mb-4 w-14 h-14 text-gray-400 dark:text-gray-200"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
            Are you sure you want to cancel this {editedProduct.description}?
          </h3>
          <button
            data-modal-toggle="popup-modal"
            type="button"
            className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-sm text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
          >
            <Link to={"/"}>Yes, I'm sure</Link>
          </button>
          <button
            onClick={closeModal}
            data-modal-toggle="popup-modal"
            type="button"
            className="text-gray-500 bg-[#FAFAFA] hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-sm border border-gray-200 text-sm font-medium px-5 py-2.5 "
          >
            No, cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
