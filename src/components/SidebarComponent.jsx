import React from "react";
import image from "../assets/image/pf.jpg";
import ppl1 from "../assets/ppl1.jpg";
function SidebarComponent() {
  return (
    // Incons
    <aside class>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="container">
          <ul className="menu text-base-content overflow-hidden">
            <li className="text-black mt-5">
              <i className="fa-solid fa-house text-3xl"></i>
            </li>
            <li className="text-black mt-5">
              <i className="fa-solid fa-user text-3xl"></i>
            </li>
            <li className="text-black">
              <i className="fa-solid fa-messag text-3xle"></i>
            </li>
            <li className="text-black mt-5">
              <i className="fa-solid fa-graduation-cap text-3xl"></i>
            </li>
            <li className="text-black mt-5">
              <i className="fa-solid fa-clock text-3xl"></i>
            </li>
            <li className="text-black mt-5">
              <i className="fa-solid fa-gear text-3xl"></i>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
}

export default SidebarComponent;
