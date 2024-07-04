import React from 'react';

function JobListings() {
  return (
    <div className="max-w-md mx-auto mt-12 mb-4">
    <div className="bg-green-400 rounded-md p-2 flex justify-center">
      <div className="bg-white rounded-md p-2 flex-1">
        <span className="text-green-400 font-bold">Latest Jobs</span>
      </div>
      <div className="bg-green-400 rounded-md p-2 flex-1">
        <span className="text-white font-bold">Recent Jobs</span>
      </div>
    </div>
  </div>
  );
}

export default JobListings;