import React from "react";

const Footer = () => (
  <footer className="bg-[#004B97] w-full pt-6 pb-2 px-4">
    
    <div className="max-w-7xl mx-auto flex flex-row items-center justify-evenly space-x-12 mb-6">
      
      <div className="flex flex-col items-center mr-8">
        {/* <span className="text-white text-2xl font-bold flex items-center">
          Car<span className="text-[#FFE066]">T</span>rade<span className="bg-white text-[#004B97] px-1 rounded ml-1">Tech</span>
        </span> */}
        <source type="image/svg+xml" srcSet="https://statics.olx.in/external/base/img/cartrade/logo/cartrade_tech.svg?v=1"></source>
        <img src="https://statics.olx.in/external/base/img/cartrade/logo/cartrade_tech.svg?v=1" className="_2PIUn w-26 h-24" alt="Car Trade"></img>
      </div>
      
      <div className="h-12 border-l border-white mx-8"></div>
      
      <span className="text-white text-2xl font-bold">olx</span>
      
      <span className="text-white text-2xl flex items-center">
        <span className="border-2 border-white rounded-sm w-5 h-3 mr-1 inline-block"></span>carwale
      </span>
      <span className="text-white text-2xlflex items-center">
        <span className="rounded-full bg-white w-4 h-4 mr-1 inline-block"></span>bikewale
      </span>
      <span className="text-white text-2xl">Car<span className="text-blue-900 border-2 border-white rounded-full px-1 bg-white font-bold">T</span>rade</span>
      <span className="text-white text-l flex items-center">
        {/* <span className="w-5 h-5 bg-white rounded mr-1 inline-block"></span>MOBILITY OUTLOOK */}
        
        <img src="https://imgd.aeplcdn.com/0x0/cw/static/icons/svg/logos/mobility/mobility-logo-red.png" className="_2PIUn w-26 h-16 text-white" alt="mobility_outlook"></img>
      </span>
    </div>
    
    <div className="max-w-7xl mx-auto flex flex-row items-center justify-between w-full">
      <a href="#" className="text-white text-sm">Sitemap</a>
      
      <span className="text-white text-sm">Free Classifieds in India . @ 2006-2025 OLX</span>
    </div>
  </footer>
);

export default Footer; 