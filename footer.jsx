import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Footer() {
  return (
    <footer className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/4 px-4 mb-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Job Categories
            </h3>
            <ul className="list-disc ml-6 text-gray-600">
              <li>
                <a href="#">Work from Home</a>
              </li>
              <li>
                <a href="#">Internship Job</a>
              </li>
              <li>
                <a href="#">Freelancer Job</a>
              </li>
              <li>
                <a href="#">Part Time Job</a>
              </li>
              <li>
                <a href="#">Full Time Job</a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 px-4 mb-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Job Type
            </h3>
            <ul className="list-disc ml-6 text-gray-600">
              <li>
                <a href="#">Create Account</a>
              </li>
              <li>
                <a href="#">Career Counseling</a>
              </li>
              <li>
                <a href="#">My Oficiona</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Report a Problem</a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 px-4 mb-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Resources
            </h3>
            <ul className="list-disc ml-6 text-gray-600">
              <li>
                <a href="#">My Account</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
              <li>
                <a href="#">How It Works</a>
              </li>
              <li>
                <a href="#">Underwriting</a>
              </li>
              <li>
                <a href="#">Employers</a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 px-4 mb-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Quick Links
            </h3>
            <ul className="list-disc ml-6 text-gray-600">
              <li>
                <a href="#">Jobs Listing</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Term & Condition</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-between items-center mt-12">
          
          <div className="flex">
            <a
              href="#"
              className="text-gray-600 hover:text-gray-800 mx-2"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-800 mx-2"
            >
              <i className="fab fa-google-plus-g"></i>
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-800 mx-2"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-800 mx-2"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="bg-gray-200 py-4">
        <div className="container mx-auto px-1">
          <div className="text-center text-gray-900">
            <a href="#" className="text-gray-900 hover:text-gray-900">
            Copyright © 2024 All Rights Reserved.
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;