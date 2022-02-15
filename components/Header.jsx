import Link from 'next/link';
import React, { useContext } from 'react';

const categories = [
  { name: 'React', slug: 'react' },
  { name: 'Web Development', slug: 'web-dev' },
];

const Header = () => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b-4 w-full inline-block border-black py-8">
        <div className="md:float-left block">
          <Link href="/" passHref>
            <span className="cursor-pointer font-bold text-4xl text-black">
              blogf
            </span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/category/${category.slug}`}
              passHref
            >
              <span className="md:float-right mt-2 align-middle text-black ml-4 font-semibold cursor-pointer">
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
