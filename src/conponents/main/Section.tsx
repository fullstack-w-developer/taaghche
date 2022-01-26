import React from "react";
import PhoneImage from "./../../assets/image/phones-360w.png";
import FreeBook from "./../../assets/image/FreeBooks.png";
import Infinitiy from "./../../assets/image/Infinity.png";
import NewBooks from "./../../assets/image/NewBooks.png";

const Section = () => {
  return (
    <div>
      <section>
        <div className="flex justify-center bg-teal-500 py-14">
          <div className="flex justify-around flex-col  mx-2 lg:mx-10">
            <h3 className="text-center text-sm lg:text-3xl yekanBold text-white">
              لذت خواند و شنیدن کتاب‌ها
            </h3>
            <h5 className="text-center text-sm lg:text-xl yekanBold text-white">
              دانلود بیش از ۹۰,۰۰۰ کتاب متنی و صوتی
            </h5>
            <div className="flex justify-center">
              <button className="text-teal-500 bg-white py-2 px-2  text-xs lg:px-5 lg:text-sm yekanBold rounded-full">
                نصب اپلیکیشن طاقچه
              </button>
            </div>
          </div>
          <img
            src={PhoneImage}
            alt="phone"
            className=" max-h-52 lg:max-h-64 mx-2 lg:mx-10"
          />
        </div>
        <div className="flex justify-evenly justify-items-end items-center bg-gray-100 py-6">
          <div className="flex flex-col justify-center items-center cursor-pointer">
            <img className="w-12 md:14" src={NewBooks} alt="NewBooks" />
            <p className="hidden md:block text-center pt-4 yekanBold text-xs  ">
              خرید کتاب های <br />
              جدید و پر فروش
            </p>
            <p className=" md:hidden text-center pt-2 yekanBold text-xs  ">
              جدید‌ترین کتاب‌ها
            </p>
          </div>
          <div className="flex flex-col justify-center items-center cursor-pointer ">
            <img className="w-12 md:14" src={FreeBook} alt="FreeBook" />
            <p className="hidden md:block text-center pt-4 yekanBold text-xs">
              امکان دریافت <br /> ۲۰+ هزار کتاب رایگان
            </p>
            <p className=" md:hidden text-center pt-2 yekanBold text-xs  mx-12">
              کتاب‌های رایگان
            </p>
          </div>
          <div className="flex flex-col justify-center items-center cursor-pointer">
            <img className="w-12 md:14" src={Infinitiy} alt="Infinitiy" />
            <p className="hidden md:block text-center pt-4 yekanBold text-xs">
              امکان خرید اشتراک ماهانه <br />
              برای ۲۷+ هزار کتاب
            </p>
            <p className=" md:hidden text-center pt-2 yekanBold text-xs  ">
              کتابخانه اشتراکی
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section;
