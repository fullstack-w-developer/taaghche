import React from "react";
import "./header.css";
import { AiOutlineSearch, AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
const Header = () => {
  return (
    <header className="header flex items-center justify-between my-5 mx-5 md:justify-around  md:mx-0">
      <div className="flex items-center md:hidden">
        <AiOutlineMenu size={23} className="mx-1  text-gray-700" />
        <div className="flex justify-center items-center cursor-pointer bg-gray-200 rounded-full w-8 h-8">
          <AiOutlineSearch size={25} className="mx-1  text-gray-700" />
        </div>
      </div>
      <div className="header-right">
        <div className="flex items-center">
          <h1 className="danstevis text-3xl text-gray-700 mx-2 md:text-5xl">
            طاقچه
          </h1>
          <ul className="hidden items-center items md:flex">
            <li>دسته‌بندی</li>
            <li>بی‌نهایت</li>
            <li>صوتی</li>
          </ul>
          <div className="hidden md:flex  bg-gray-100 items-center py-2 rounded-full overflow-hidden flex-grow-0 flex-shrink-0 basis-1/2 px-1">
            <AiOutlineSearch size={20} className="mx-1" />
            <input
              type="text"
              className=" bg-gray-100 outline-none yekanBold text-gray-700 text-sm flex-1"
            />
            <AiOutlineClose className="cursor-pointer mx-2" />
          </div>
        </div>
      </div>
      <div className="header-left">
        <button className="yekanBold text-xs bg-slate-500 px-3 py-2 border-0 shadow-sm text-white rounded-full mx-2">
          نصب طاقچه
        </button>
        <button className="yekanBold text-xs text-slate-700 hidden md:inline-block">
          ورود
        </button>
      </div>
    </header>
  );
};

export default Header;
