import React from "react";
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://i.pinimg.com/736x/4a/bc/c0/4abcc00427dbb86ee5da8270b52204f8.jpg" alt=""/>
            {props.message}
            <div>
                <span>{props.likesCount} likes</span>
            </div>
        </div>
    );
}

export default Post;