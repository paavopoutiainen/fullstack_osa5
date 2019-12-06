import React, { useState } from 'react'
import PropTypes from "prop-types"

const BlogForm = ({ createNewBlog }) => {
    const [blog, setBlog] = useState({ title: "", author: "", url:"" })

    function handleChange (e) {
        setBlog({ ...blog, [e.target.name] : e.target.value })
    }
    function createNew (e) {
        createNewBlog(e, blog)
        setBlog({ title: "", author: "", url:"" })
    }

    return (
        <div>

            <form>
                <h1>create new</h1>
                <div>
                    <label>title: </label>
                    <input value={blog.title} name ="title" onChange={(e) => handleChange(e)}></input>
                </div>
                <div>
                    <label>author: </label>
                    <input value={blog.author} name ="author" onChange={(e) => handleChange(e)}></input>
                </div>
                <div>
                    <label>URL: </label>
                    <input value={blog.url} name ="url" onChange={(e) => handleChange(e)}></input>
                </div>
                <button onClick={(e) => createNew(e)}>Create</button>
            </form>
        </div>
    )
}

BlogForm.propTypes = { /*toggle: PropTypes.func.isRequired,
    getBlogs: PropTypes.func.isRequired,
    setMessage: PropTypes.func.isRequired,
    setErrorMessage: PropTypes.func.isRequired,*/
    createNewBlog: PropTypes.func.isRequired
}

export default BlogForm