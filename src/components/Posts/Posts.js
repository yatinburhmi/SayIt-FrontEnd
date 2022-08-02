import React from "react";
import Post from "./Post/Post";
import useStyles from './styles';
import { useSelector } from "react-redux";


const Posts = () => {
    
    const posts = useSelector((state) => state.posts);
    console.log("🚀 ~ file: Posts.js ~ line 10 ~ Posts ~ posts", posts)
    
    const classes = useStyles();
    return(
        <>
            <h1>Posts</h1>
            <Post/>
            <Post/>
        </>
    )
}

export default Posts;