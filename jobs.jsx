import company_logo_1 from './company_logo_1.png.png';
import company_logo_2 from './company_logo_2.png.png';
import company_logo_3 from './company_logo_3.png.png';
import company_logo_4 from './company_logo_4.png.png';
import company_logo_5 from './company_logo_5.png.png';
import company_logo_6 from './company_logo_6.png.png';
import company_logo_7 from './company_logo_7.png.png';
import company_logo_8 from './company_logo_8.png.png';
function Jobs(){
    return(
<div className="jobs">
<div className="container w-30 mx-auto mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="rounded-lg shadow-md bg-white p-6 text-center">
      <p className="text-left font-bold text-green-600 bg-green-200 py-1 px-2 rounded-full w-20">FULLTIME</p>   
           <img src={company_logo_1} alt="Product Redesign" className="w-24 h-24 mx-auto mb-4" />

        <h3 className="text-xl font-bold text-green-500 mb-2">Product Redesign</h3>
        <p className="text-gray-700 mb-4">2708 Scenic Way, IL 62373</p>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">Apply Now</button>
      </div>
      <div className="rounded-lg shadow-md bg-white p-6 text-center">
      <p className="text-left font-bold text-green-600 bg-green-200 py-1 px-2 rounded-full w-20">FULLTIME</p>   
        <img src={company_logo_2} alt="New Product Mockup" className="w-24 h-24 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-green-500 mb-2">New Product Mockup</h3>
        <p className="text-gray-700 mb-4">2708 Scenic Way, IL 62373</p>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">Apply Now</button>
      </div>
      <div className="rounded-lg shadow-md bg-white p-6 text-center">
      <p className="text-left font-bold text-yellow-600 bg-yellow-200 py-1 px-2 rounded-full w-20">PARTTIME</p>   
        <img src={company_logo_3} alt="Custom PHP Developer" className="w-24 h-24 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-green-500 mb-2">Custom PHP Developer</h3>
        <p className="text-gray-700 mb-4">3765 C Street, Worcester</p>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">Apply Now</button>
      </div>
      <div className="rounded-lg shadow-md bg-white p-6 text-center">
      <p className="text-left font-bold text-green-600 bg-green-200 py-1 px-2 rounded-full w-20">FULLTIME</p>   
        <img src={company_logo_4} alt="Wordpress Developer" className="w-24 h-24 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-green-500 mb-2">Wordpress Developer</h3>
        <p className="text-gray-700 mb-4">2719 Duff Avenue, Winooski</p>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">Apply Now</button>
      </div>
      <div className="rounded-lg shadow-md bg-white p-6 text-center">
      <p className="text-left font-bold text-green-600 bg-green-200 py-1 px-2 rounded-full w-20">FULLTIME</p>   
        <img src={company_logo_5} alt="Web Maintenance" className="w-24 h-24 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-green-500 mb-2">Web Maintenence</h3>
        <p className="text-gray-700 mb-4">2708 Scenic Way, IL 62373</p>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">Apply Now</button>
      </div>
      <div className="rounded-lg shadow-md bg-white p-6 text-center">
      <p className="text-left font-bold text-yellow-600 bg-yellow-200 py-1 px-2 rounded-full w-20">PARTTIME</p>   
        <img src={company_logo_6} alt="Photoshop Designer" className="w-24 h-24 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-green-500 mb-2">Photoshop Designer</h3>
        <p className="text-gray-700 mb-4">2865 Emma Street, Lubbock</p>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">Apply Now</button>
      </div>
      <div className="rounded-lg shadow-md bg-white p-6 text-center">
      <p className="text-left font-bold text-yellow-600 bg-yellow-200 py-1 px-2 rounded-full w-20">PARTTIME</p>   
        <img src={company_logo_7} alt="HTML & CSS3 Coder" className="w-24 h-24 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-green-500 mb-2">HTML5 & CSS3 Coder</h3>
        <p className="text-gray-700 mb-4">2719 Burnside Avenue, Logan</p>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">Apply Now</button>
      </div>
      <div className="rounded-lg shadow-md bg-white p-6 text-center">
      <p className="text-left font-bold text-green-600 bg-green-200 py-1 px-2 rounded-full w-20">FULLTIME</p>   
        <img src={company_logo_8} alt=".Net Developer" className="w-24 h-24 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-green-500 mb-2">.Net Developer</h3>
        <p className="text-gray-700 mb-4">3815 Forest Drive, Alexandria</p>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">Apply Now</button>
      </div>
    </div>
    <div className="container mx-auto mt-12 text-center">
      <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">Browse All Jobs</button>
    </div>
  </div>
  
    );
}
export default Jobs;