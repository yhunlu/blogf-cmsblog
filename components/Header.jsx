import { formatWithValidation } from 'next/dist/shared/lib/utils';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { getCategories } from '../services';
import logo from '../asset/fav.png';
import Image from 'next/image';

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);

  return (
    <div className="container bg-black text-white shadow-lg rounded-lg mx-auto px-10 mb-5">
      <div className="border-b-4 w-full inline-block border-black py-8">
        <div className="md:float-left block">
          <Link href="/" passHref>
            <div className="w-30 h-10 flex items-center flex-center cursor-pointer">
              <Image src={logo} alt="logo" />
            </div>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/category/${category.slug}`}
              passHref
            >
              <span className="md:float-right mt-2 align-middle ml-4 font-semibold cursor-pointer">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
