import React from "react";

const JobCategories = () => {
  return (
    <div className="mt-10 bg-gray-100">
    <div className="container mx-auto px-4 py-16 ">
      <h2 className="text-3xl font-bold text-center mb-8">
        Job Categories
      </h2>
      <p className="text-gray-500 text-center mb-19 ">
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dicta illo, ducimus placeat facere est temporibus explicabo dignissimos nobis, voluptatibus officiis eius? Voluptates, eveniet quisquam..
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-center   ">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-center mb-4">
            <div className="bg-green-500 rounded-full p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 20l4-16m4 4l4 4m4-4l4 4"
                />
              </svg>
            </div>
          </div>
          <h3 className="text-lg font-bold mb-2">Web & Software Dev</h3>
          <p className="text-green-500">122 Jobs</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-center mb-4">
            <div className="bg-green-500 rounded-full p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 20l4-16m4 4l4 4m4-4l4 4"
                />
              </svg>
            </div>
          </div>
          <h3 className="text-lg font-bold mb-2">Data Science & Analitycs</h3>
          <p className="text-green-500">155 Jobs</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-center mb-4">
            <div className="bg-green-500 rounded-full p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 20l4-16m4 4l4 4m4-4l4 4"
                />
              </svg>
            </div>
          </div>
          <h3 className="text-lg font-bold mb-2">Accounting & Consulting</h3>
          <p className="text-green-500">300 Jobs</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-center mb-4">
            <div className="bg-green-500 rounded-full p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 20l4-16m4 4l4 4m4-4l4 4"
                />
              </svg>
            </div>
          </div>
          <h3 className="text-lg font-bold mb-2">Writing & Translations</h3>
          <p className="text-green-500">80 Jobs</p>
        </div>
      </div>
      <div className="text-center mt-8">
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          VIEW ALL CATEGORIES
        </button>
      </div>
    </div>
    </div>
  );
};

export default JobCategories;