import React from "react";

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
        <button>Delete</button>
      </div>
    </div>
  );
}

export default PostItem;
