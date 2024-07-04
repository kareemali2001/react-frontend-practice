import React from 'react';


const Newsletter = () => {
  return (
    <div className="h-25 bg-green-700 flex items-center justify-center">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <div className="bg-green-700 p-20 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-4 text-center text-white">Subscribe Our Newsletter!</h2>
          <p className="text-lg text-center text-white mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni obcaecati molestias officia? Possimus earum culpa consectetur codnrutb dolfhhue!
          </p>
          <div className="flex items-center justify-center">
            <input
              type="email"
              className="w-250 px-4 py-2 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-8 focus:ring-blue-500"
              placeholder="Enter your Email..."
            />
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-r-lg"
              type="button"
            >
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;