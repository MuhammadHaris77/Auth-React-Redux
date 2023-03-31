import { applyMiddleware, combineReducers, createStore } from "redux";
import signUPreducer from "./reducer/signUpreducer";
import thunk from "redux-thunk";


const allReducer = combineReducers({
    signUPreducer,
})



const store = createStore(allReducer,applyMiddleware(thunk));


export default store;
