// components/Footer.tsx (or wherever you prefer to place your footer component)

import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      {/* "Get in touch" Section */}
      <div className="bg-[#006abc] text-white py-16 px-6 md:px-30">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:space-x-12">
          {/* Left Column: Contact Info */}
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h2 className="text-4xl font-bold mb-4">Get in touch</h2>
            <p className="text-3xl mb-6">For general enquiries</p>

            <div className="space-y-4 text-lg">
              <div>
                <p className="font-semibold">Address :</p>
                <p>110, 16th Road, Chembur, Mumbai - 400071</p>
              </div>
              <div>
                <p className="font-semibold">Phone :</p>
                <p>+91 22 25208822</p>
              </div>
              <div>
                <p className="font-semibold">Email :</p>
                <p>info@supremegroup.co.in</p>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="md:w-1/2">
            <form className="space-y-6">
              <div>
                <label htmlFor="fullName" className="sr-only">
                  Full name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="Full name"
                  className="w-full p-3 bg-[#006abc] font-sans border-b border-whiterounded-md placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  className="w-full p-3 bg-[#006abc] border-b border-white rounded-md placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
              </div>
              <div>
                <label htmlFor="company" className="sr-only">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  placeholder="Company"
                  className="w-full p-3 bg-blue-5 border-b border-white rounded-md placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Message"
                  className="w-full p-3 bg-[#006abc] border-b border-white rounded-md placeholder-gray-300 resize-y focus:outline-none focus:ring-2 focus:ring-blue-300"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-[#006abc] text-white border-2 border-white font-semibold py-3 px-8 rounded-full hover:bg-white hover:text-blue-500 transition-colors"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Copyright/Navigation Section */}
      <div className="relative h-[80vh] py-12 px-6 md:px-30 text-gray-700 bg-gray-100 overflow-hidden">
        {/* Background image overlay */}
        <div
          className="absolute h-[120%] ml-[70%] w-[90%] overflow-auto bg-no-repeat bg-left-bottom"
          style={{
            backgroundImage: "url('/assets/images/logo.svg')",
            opacity: 0.15,
            zIndex: 0,
            backgroundSize: "150%",
          }}
        ></div>

        {/* Content container */}
        <div className="relative max-w-7xl mx-auto z-10">
          {/* Logo */}
          <div className="mb-8">
            <Image
              src="/assets/images/logo.svg"
              alt="Supreme Group Logo"
              width={180}
              height={60}
              className="h-15 w-auto"
            />
          </div>

          {/* Navigation Columns */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-18 mb-20">
            <div className="font-sans">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">
                APPLICATIONS
              </h3>
              <ul className="space-y-5 font-light text-md">
                <li>
                  <a href="#" className="hover:underline">
                    Apparel
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Automotive
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Filtration
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Customised Nonwoven
                  </a>
                </li>
              </ul>
            </div>
            <div className="font-sans">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">COMPANY</h3>
              <ul className="space-y-5 font-light text-md">
                <li>
                  <a href="#" className="hover:underline">
                    Who We Are
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Global Competency
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Innovation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    ESG Impact
                  </a>
                </li>
              </ul>
            </div>
            <div className="font-sans">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">MORE</h3>
              <ul className="space-y-5 font-light text-md">
                <li>
                  <a href="#" className="hover:underline">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div className="font-sans">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">
                FOLLOW US
              </h3>
              <ul className="space-y-5 font-light text-md">
                <li>
                  <a href="#" className="hover:underline">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright and Bottom Address */}
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 border-t pt-8 border-gray-300">
            <p>&copy;2024 All Rights Reserved.</p>
            <p>Supreme House, 110, 16th Road, Chembur, Mumbai - 400071</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
