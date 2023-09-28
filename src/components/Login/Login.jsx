import React from 'react'

const Login = () => {
  return (
    <div>
        <h2>Login</h2>
        <form >
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
             
            />
            </div>
          <div>
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
  )
}

export default Login
