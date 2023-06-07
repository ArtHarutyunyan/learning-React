import React from "react";
import MyButton from "./UI/Button/MyButton";

function PostItem(props) {
  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {props.index}. {props.post.title}
        </strong>
        <div>{props.post.body}</div>
      </div>
      <div className="post__btn">
        <MyButton>Delete</MyButton>
      </div>
    </div>
  );
}

export default PostItem;
