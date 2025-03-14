import React from "react";

const Header = () => {
  return (
    <div className="flex items-center justify-center gap-4 mb-10">
      <img
        src="https://www.dropbox.com/scl/fi/9rip2vxfq0qkymlg28k60/logo.png?rlkey=kk1wduacq70jnxp7a90iiuir2&st=mxr050xa&dl=1"
        alt="Cotton World Logo"
        className="w-16 h-16 object-contain mix-blend-multiply"
      />
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 font-sans">
        COTTON WORLD
      </h1>
    </div>
  );
};

export default Header;
