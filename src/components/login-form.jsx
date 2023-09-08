import { useEffect, useState } from 'react'

const LogIn = () => {

    return (
       <form>
            <label>Username</label>
            <input type="text" title="username" />

            <label>Password</label>
            <input type="password" title="password" />

            <button type="submit">Login</button>
       </form>
    )
}



export default LogIn