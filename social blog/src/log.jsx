import React from "react";
import  ReactDOM from "react";
import 


export default function signIn(){
    const [email, setEmail] = React.useState("")
    const [password ,setPassword] = React.useState("")
    return(
        <>
        <form>
            <h1>Log in</h1>
            <input type="email" placeholder="Enter your email." value={email}/>
            <input type="password" placeholder="Enter your Password" value={password}/>
        </form>
        </>
    )
}

