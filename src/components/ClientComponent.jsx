import React, { useState } from "react";
import ppl2 from "../assets/ppl2.jpg";
import { BsStar, BsStarFill } from "react-icons/bs";

const ClientComponent = ({ userInfor }) => {
  return (
    <div class="w-full h-[74%] overflow-y-scroll  rounded-lg  sm:p-8 bg-white">
      <div class="flex items-center justify-between mb-4">
        <h5 class="text-xl font-bold leading-none text-gray-900 d">
          Latest Customers
        </h5>
        <a
          href="#"
          class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
        >
          View all
        </a>
      </div>

      {userInfor.map((message) => (
        <div class="flow-root overflow-auto">
          <ul role="list" class="divide-y bg-white ">
            <li class="py-3 sm:py-4">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <img
                    class="w-8 h-8 rounded-full"
                    src={`/image/${message.img}`}
                  />
                </div>
                <div class="flex-1 min-w-0 ms-4">
                  <p class="text-sm font-mediumtruncate ">{message.name}</p>
                  <p class="text-sm text-gray-500 truncate ">
                    {message.message}
                  </p>
                </div>
                <div class="inline-flex items-center font-semibold text-gray-900 ">
                  {message.date}
                </div>
              </div>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ClientComponent;
