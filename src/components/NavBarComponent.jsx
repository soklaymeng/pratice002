import React from "react";
import profile from "../assets/image/pf.jpg";
const NavBarComponent = () => {
  return (
    <div className="navbar">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl text-black font-bold">Potfolio</a>
      </div>
      <div className="flex-none gap-2">
        <div className="">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img alt="Tailwind CSS Navbar component" src={profile} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBarComponent;
