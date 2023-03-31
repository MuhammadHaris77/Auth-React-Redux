import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { authAct } from "../redux/action/authAct";

const SignUp = () => {

    const [userName, setusername] = useState();
    
    const [userEmail, setuseremail] = useState();
    const [userPassword, setuserPassword] = useState();
    const dispatch = useDispatch();
    
    
    return (
        <div>
            <h1>
                SIGN UP </h1>
            <input type='text' placeholder="Enter Your Name " value={userName} onChange={(e) => setusername(e.target.value)} />
            <br />
            <input type="email" placeholder="Enter Your Email " value={userEmail} onChange={(e) => setuseremail(e.target.value)} />
            <br />


            <input type="password" placeholder="Enter Your Password" value={userPassword} onChange={(e) => setuserPassword(e.target.value)} />
            <br />
            <button onClick={()=>{dispatch(authAct(userName,userEmail,userPassword))}}>SIGN UP</button>
            
   </div >
    )
}
export default SignUp;