import { useState } from "react";
import React from "react";
import Swal from "sweetalert2";

function Content() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isAddModalOpen, setAddModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  const toggleAddModal = () => {
    setAddModalOpen(!isAddModalOpen);
  };

  const toggleEditModal = () => {
    setEditModalOpen(!isEditModalOpen);
  };

  const showAlertDeleteUser = () => {
    Swal.fire({
      title: "Berhasil!",
      text: "User Berhasil Dihapus",
      icon: "success",
      confirmButtonText: "Okay",
    });
  };

  const showAlertAddUser = () => {
    Swal.fire({
      title: "Berhasil!",
      text: "User Berhasil Ditambahkan",
      icon: "success",
      confirmButtonText: "Okay",
    });
  };

  const showAlertEditUser = () => {
    Swal.fire({
      title: "Berhasil!",
      text: "User Berhasil Diedit",
      icon: "success",
      confirmButtonText: "Okay",
    });
  };

  return (
    <div className="ml-72 mt-20">
      <h1 className="font-bold text-xl my-8">Daftar User</h1>
      <button 
        onClick={toggleAddModal}
        className="text-white bg-green-400 px-2 py-1 rounded-xl my-2"
      >
        Tambah
      </button>

      <div className="relative overflow-x-auto pr-4">
        <table className="w-full text-sm text-left rtl:text-right text-gray-400">
          <thead className="text-xs uppercase bg-gray-700 text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">No.</th>
              <th scope="col" className="px-6 py-3">Nama</th>
              <th scope="col" className="px-6 py-3">NIM</th>
              <th scope="col" className="px-6 py-3">Jurusan</th>
              <th scope="col" className="px-6 py-3">Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b bg-gray-800 border-gray-700">
              <td className="px-6 py-4">1</td>
              <td className="px-6 py-4">Ricky Primayuda Putra</td>
              <td className="px-6 py-4">A11.2022.14486</td>
              <td className="px-6 py-4">Teknik Informatika</td>
              <td className="px-6 py-4">
                <div className="flex space-x-2">
                  <button
                    onClick={toggleEditModal}
                    className="text-white bg-blue-400 px-2 py-1 rounded-xl"
                  >
                    Edit
                  </button>
                  <button
                    onClick={toggleModal}
                    className="text-white bg-red-400 px-2 py-1 rounded-xl"
                  >
                    Hapus
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Modal for Adding User */}
      {isAddModalOpen && (
        <div
          id="modal-add"
          aria-hidden="true"
          className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50"
        >
          <div className="relative p-4 w-full max-w-md max-h-full">
            <div className="relative rounded-lg shadow bg-gray-700">
              <div className="flex items-center justify-between p-4 border-b rounded-t border-gray-600">
                <h3 className="text-lg font-semibold text-white">Tambahkan User</h3>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center hover:bg-gray-600 hover:text-white"
                  onClick={toggleAddModal}
                >
                  <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div className="p-4">
                <div className="grid gap-4 mb-4 grid-cols-2">
                  <div className="col-span-2">
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-white">Nama</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="border text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
                      placeholder="Nama"
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <label htmlFor="nim" className="block mb-2 text-sm font-medium text-white">NIM</label>
                    <input
                      type="text"
                      className="border text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
                      placeholder="A11....."
                    />
                  </div>
                  <div className="col-span-2">
                    <label htmlFor="jurusan" className="block mb-2 text-sm font-medium text-white">Jurusan</label>
                    <select id="jurusan" className="border text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white">
                      <option></option>
                      <option>Teknik Informatika</option>
                      <option>Manajemen</option>
                      <option>Sistem Informasi</option>
                    </select>
                  </div>
                </div>
                <button
                  onClick={() => {
                    showAlertAddUser();
                    toggleAddModal();
                  }}
                  type="submit"
                  className="text-white inline-flex items-center focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
                >
                  Tambahkan Mahasiswa
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal for Editing User */}
      {isEditModalOpen && (
        <div
          id="modal-edit"
          aria-hidden="true"
          className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50"
        >
          <div className="relative p-4 w-full max-w-md max-h-full">
            <div className="relative rounded-lg shadow bg-gray-700">
              <div className="flex items-center justify-between p-4 border-b rounded-t border-gray-600">
                <h3 className="text-lg font-semibold text-white">Edit User</h3>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center hover:bg-gray-600 hover:text-white"
                  onClick={toggleEditModal}
                >
                  <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div className="p-4">
                <div className="grid gap-4 mb-4 grid-cols-2">
                  <div className="col-span-2">
                    <label htmlFor="edit-name" className="block mb-2 text-sm font-medium text-white">Nama</label>
                    <input
                      type="text"
                      name="edit-name"
                      id="edit-name"
                      className="border text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
                      placeholder="Nama"
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <label htmlFor="edit-nim" className="block mb-2 text-sm font-medium text-white">NIM</label>
                    <input
                      type="text"
                      className="border text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
                      placeholder="A11....."
                    />
                  </div>
                  <div className="col-span-2">
                    <label htmlFor="edit-jurusan" className="block mb-2 text-sm font-medium text-white">Jurusan</label>
                    <select id="edit-jurusan" className="border text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white">
                      <option></option>
                      <option>Teknik Informatika</option>
                      <option>Manajemen</option>
                      <option>Sistem Informasi</option>
                    </select>
                  </div>
                </div>
                <button
                  onClick={() => {
                    showAlertEditUser();
                    toggleEditModal();
                  }}
                  type="button"
                  className="text-white inline-flex items-center focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
                >
                  Edit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal for Deleting User */}
      {isModalOpen && (
        <div
          id="popup-modal"
          className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50"
          aria-hidden={!isModalOpen}
        >
          <div className="relative p-4 w-full max-w-md max-h-full">
            <div className="relative rounded-lg shadow bg-gray-700">
              <button
                type="button"
                className="absolute top-3 right-3 text-gray-400 bg-transparent rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center hover:bg-gray-600 hover:text-white"
                onClick={toggleModal}
              >
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
              <div className="p-4 text-center">
                <svg
                  className="mx-auto mb-4 w-12 h-12 text-gray-200"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                <h3 className="mb-5 text-lg font-normal text-gray-400">
                  Apakah kamu yakin ingin menghapus user ini?
                </h3>
                <button
                  type="button"
                  className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
                  onClick={() => {
                    showAlertDeleteUser();
                    toggleModal();
                  }}
                >
                  Ya
                </button>
                <button
                  type="button"
                  className="py-2.5 px-5 ms-3 text-sm font-medium focus:outline-none rounded-lg border focus:z-10 focus:ring-4 focus:ring-gray-700 bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700"
                  onClick={toggleModal}
                >
                  Tidak
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Content;
