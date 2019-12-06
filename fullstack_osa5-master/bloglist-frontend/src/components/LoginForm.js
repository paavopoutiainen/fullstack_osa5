import React from 'react'

const LoginForm = ({ credentials, handleLogin, handleCredentialChange }) => {
    return (
        <div >
            <form>
                <div >
                    <label for="username">Username: </label>
                    <input id="username" value={credentials.username} name="username" onChange={(e) => handleCredentialChange(e)}></input>
                </div>
                <div>
                    <label for="password">Password: </label>
                    <input id="password" value={credentials.password} name="password" type="password" onChange={(e) => handleCredentialChange(e)}></input>
                </div>
                <div>
                    <button onClick={(e) => handleLogin(e)}>Login</button>
                </div>         
            </form>
        </div>
    )
}

export default LoginForm