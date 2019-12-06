import React, { useState, useEffect } from 'react'
import './App.css'
import LoginForm from "./components/LoginForm"
import Notification from "./components/Notification"
import Togglable from "./components/Togglable"
import blogService from "./services/blogService"
import loginService from "./services/loginService"
import BlogForm from "./components/BlogForm"
import Blog from "./components/Blog"
import  { useField } from './hooks'


function App() {
    const [initialBlogs, setBlogs] = useState([])
    const username = useField("text")
    const password = useField("password")
    const [user, setUser] = useState(null)
    const [message, setMessage] = useState(null)
    const [errorMessage, setErrorMessage] = useState(null)

    const blogFormRef = React.createRef()

    useEffect(() => {
        getBlogs()
    }, [])

    const getBlogs = async () => {
        const blogsFromDb = await blogService.getAll()
        const sortedByLikes = blogsFromDb.sort((a, b) => b.likes - a.likes)
        setBlogs(sortedByLikes)
    }

    useEffect(() => {
        const user = JSON.parse(window.localStorage.getItem("loggedBloglistappUser"))
        if (user){
            setUser(user)
        }
    }, [])

    const handleLogin = async (e) => {
        e.preventDefault()
        try {
            const user = await loginService.login({ username: username.value, password: password.value })
            console.log("user", user)
            window.localStorage.setItem("loggedBloglistappUser", JSON.stringify(user))
            setUser(user)
            username.reset()
            password.reset()
            blogService.setToken(user.token)

        } catch (exception){
            console.error(exception)
            setErrorMessage("wrong username or password")
            setTimeout(() => {
                setErrorMessage(null)
                username.reset()
                password.reset()
            }, 3000)
        }
    }

    const createNewBlog = async (e, blog) => {
        e.preventDefault()
        try {
            blogFormRef.current.toggleVisibility()
            await blogService.create(blog)
            getBlogs()

            setMessage(`a new blog ${blog.title} by ${blog.author} added`)
            setTimeout(() => {
                setMessage(null)
            }, 3000)


        } catch(exception){
            console.error("here", exception)
        }
        setTimeout(() => {
            setErrorMessage(null)
        }, 3000)
    }

    const modifyLikes = async (blog) => {

        try {
            const response = await blogService.update(blog)
            console.log("modifydunktio",response)
            getBlogs()
        }catch(exception){
            console.error(exception)
        }
    }
    const deleteBlog = async (blog) => {
        if(window.confirm(`Are you sure you want to remove blog ${blog.title} by ${blog.author}`)){
            try {
                await blogService.deleteBlog(blog)
                getBlogs()
            } catch (exception) {
                console.error(exception)
            }
        }
    }

    const logout = () => {

        window.localStorage.removeItem("loggedBloglistappUser")
        setUser(null)
    }

    if (user === null) {
        return (
            <div>
                <h2>Log into application</h2>
                <Notification message = {message} errorMessage = {errorMessage}/>
                <LoginForm username={username} password={password} handleLogin={handleLogin}/>
            </div>
        )
    }
    const rows = () => {
        const blogs = initialBlogs.map((b, i) => <Blog modifyLikes={modifyLikes} deleteBlog={deleteBlog} key={i} blog = {b}/>)
        return blogs
    }

    return (
        <div>
            <h1>Blogs</h1>
            <button onClick={logout}>Logout</button>
            <p>{user.name} logged in</p>
            <Notification message={message} errorMessage= {errorMessage}/>
            <Togglable buttonLabel="New blog" ref={blogFormRef}>
                <BlogForm initialBlogs={initialBlogs}
                    setBlogs={setBlogs}
                    setErrorMessage = {setErrorMessage}
                    setMessage = {setMessage}
                    getBlogs={getBlogs}
                    createNewBlog= {createNewBlog}
                />
            </Togglable>


            {rows()}
        </div>
    )
}

export default App
