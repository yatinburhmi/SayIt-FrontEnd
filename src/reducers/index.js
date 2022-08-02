import { combineReducers } from "redux";
import posts from './posts';


export default combineReducers({
    //in here we can use all the individual reducers we have. 
    posts: posts, 
})