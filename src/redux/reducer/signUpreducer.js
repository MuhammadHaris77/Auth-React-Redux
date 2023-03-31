import { constant } from "../constant/constant";

const INITIAL_STATE =
{
    userData : [{
      username : '',
      userpassword: '',
      useremail:'',
    }]
}
    ;


const signUPreducer = (state = INITIAL_STATE, action) => {
    console.log(state.userData,action)

    if(action.type === constant.checksignup){
        state = {
            ...state,userData:[
                ...state.userData,{
                    username:action.username,
                    userpassword:action.userpassword,
                    useremail:action.useremail
                }
            ]
        }
    }
    return state
}

console.log(INITIAL_STATE.userData)

export default signUPreducer;