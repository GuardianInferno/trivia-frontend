import React, {useState} from "react"
import Navbar from "../Navbar/Navbar"
import axios from 'axios'

const Login = () => {
    const [user, setUser] = useState('')
    const [pass, setPass] = useState('')
    const [logged, setLogged] = useState('')
    
    const login = (e:any) =>{
        e.preventDefault()
        axios.post('http://127.0.0.1:8000/users/login/',{username:user, password:pass}).then((response)=>{
            setLogged(response.data)

          })
    }

    

    return(
        <div className="h-screen">
            <Navbar />
            {logged.length === 0 ?
                <form onSubmit={login}>
                    <label htmlFor="user">username <input type='username' id='user' value={user} name='user' onChange={(e) => setUser(e.target.value)} /></label>
                    <label htmlFor="pass">password <input type='password' name='pass' id='pass' value={pass} onChange={(e) => setPass(e.target.value)} /></label>
                    <input type="submit" value="Submit" />
                </form>:
                <div>Wecome, {logged}</div>

            }

            
        </div>
    )
}


export default Login