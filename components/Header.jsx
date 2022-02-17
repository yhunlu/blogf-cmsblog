import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { getCategories } from '../services';

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
            <span className="cursor-pointer font-bold text-4xl">blogf</span>
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
