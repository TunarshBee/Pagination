import React from "react";

const Post = ({ posts, loading }) => {
  if (loading) {
    return <h1>loading...</h1>;
  }
  return (
    <ul className="list-group mt-1">
      {posts.map((post) => {
        return <li key={post.id} className="list-group-item mb-2 text-success"> {post.title}</li>;
      })}
    </ul>
  );
};

export default Post;
