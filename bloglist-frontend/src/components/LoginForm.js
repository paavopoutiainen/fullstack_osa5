import React from 'react'
import { propsForInputField } from "../utils/helperFunctions"

const LoginForm = ({ username, password, handleLogin }) => {
    return (
        <div >
            <form>
                <div >
                    <label >Username: </label>
                    <input {...propsForInputField(username)}></input>
                </div>
                <div>
                    <label >Password: </label>
                    <input {...propsForInputField(password)}></input>
                </div>
                <div>
                    <button onClick={(e) => handleLogin(e)}>Login</button>
                </div>
            </form>
        </div>
    )
}

export default LoginForm