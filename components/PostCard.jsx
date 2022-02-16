import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const PostCard = ({ post }) => {
  console.log(post);

  return (
    <div className="bg-black shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8">
      <div className="relative overflow-hidden shadow-md pb-80 mb-6">
        <Image
          className="object-top absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg"
          src={post.featuredImage.url}
          alt={post.title}
          layout="fill"
        />
      </div>
    </div>
  );
};

export default PostCard;
