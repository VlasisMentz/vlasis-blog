import React, { useState, useEffect } from 'react'
import moment from 'moment'
import parse from 'html-react-parser'
import { getComments } from '../services'

const Comments = ({ slug }) => {
  const [comments, setComments] = useState([])

  useEffect(() => {
    getComments(slug).then((result) => setComments(result))
    console.log(comments)
  }, [])

  return (
    <>
      {comments.map((comment) => (
        <h1>{comment.createdAt}</h1>
      ))}
    </>
  )
}

export default Comments
