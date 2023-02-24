import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/userSlice";

import React from "react";

function PostAuthor({ userId }) {
  const users = useSelector(selectAllUsers);
  const author = users.find((user) => user.id == userId);
  return <span>By {author ? author.name : "Unknown author"}</span>;
}

export default PostAuthor;
