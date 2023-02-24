import { useSelector } from "react-redux";
import { selectAllState } from "./postSlice";

import React from "react";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButton from "./ReactionButton";

function PostList() {
  const posts = useSelector(selectAllState);

  const orderPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date));

  const renderedPosts = orderPosts.map((post) => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <p className="postCredit">
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </p>
      <ReactionButton post={post} />
    </article>
  ));
  return (
    <section>
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  );
}

export default PostList;
