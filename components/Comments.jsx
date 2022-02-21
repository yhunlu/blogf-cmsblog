import React, { useState, useEffect } from 'react'
import moment from 'moment';
import parse from 'html-react-parser';
import { getComments } from '../services';

const Comments = ({ slug }) => {
  const [comments, setComments] = useState([])
  
  useEffect(() => {
    getComments(slug).then((result) => setComments(result))
  }, [slug])

  return (
    <>
      {comments.length > 0 && (
        <div className="bg-black shadow-lg bg-opacity-80 text-white rounded-lg p-8 pb-12 mb-8">
          <h3 className="text-xl mb-8 font-semibold pb-4 text-orange-200">
            {comments.length}
            {' '}
            Comments
          </h3>
          {comments.map((comment) => (
            <div key={comment.createdAt} className="border-b border-orange-300 mb-4 pb-4">
                <p className="mb-4">
                  <span className="font-semibold">{comment.name}</span>
                  {' '}
                  on
                  {' '}
                  {moment(comment.createdAt).format('MMM DD, YYYY, HH:mm:ss')}
                </p>
                <p className="whitespace-pre-line text-orange-100 w-full">{parse(comment.comment)}</p>
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default Comments