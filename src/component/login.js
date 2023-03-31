import React, { useState } from "react";
import { useSelector } from 'react-redux';
import Dashboard from "./dashboard";


const Login=()=>{
   
    const [loginEmail,setloginEmail]=useState();
    const [loginPassword,setloginPassword]=useState();
     const [render,setrender] = useState() 
    const select = useSelector(state=>state.signUPreducer)
    console.log(select)
    const {email,password} = select.userData 
 console.log(select)
 console.log(email,password)
       
    const login=()=>{       

        const  find = select.some((e)=>{
             return e.useremail === loginEmail && e.userpassword === loginPassword
             
        })

        console.log(find)
        
     
    }
        
    return(
      
        <div>
           {render ? <Dashboard/> : 
      <div>
      <h1>
       LOG IN </h1>
    <input type="email"  autoComplete="on" placeholder="Enter Your Email "  value={loginEmail} onChange={(e)=>setloginEmail(e.target.value)}/>
    <br/>

    
    <input type="password" autoComplete="on" placeholder="Enter Your Password"  value={loginPassword} onChange={(e)=>setloginPassword(e.target.value)} />
    <br/>
    <button onClick={login}>LOG IN</button>
    <br/>
    </div>
}

 

   </div>
    )
}
export default Login;