import { constant } from "../constant/constant"


const authAct=(userName,userEmail,userPassword)=>{
 return   (dispatch)=>{
     dispatch({type: constant.signup, username: userName, useremail:userEmail,userpassword: userPassword })
    }

 
}

export {authAct}