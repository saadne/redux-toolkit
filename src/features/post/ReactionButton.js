import { useDispatch } from "react-redux";

import { reactionAdded } from "./postSlice";

const reactionEmoji = {
  thumpsUp: "👍",
  wow: "😮",
  heart: "❤️",
  rocket: "🚀",
  coffee: "☕",
};

function ReactionButton({ post }) {
  const dispatch = useDispatch();
  const reactionsButtons = Object.entries(reactionEmoji).map(
    ([name, emoji]) => {
      return (
        <button
          key={name}
          type="button"
          className="reactionButton"
          onClick={() =>
            dispatch(reactionAdded({ postId: post.id, reaction: name }))
          }>
          {emoji} {post.reactions[name]}
        </button>
      );
    }
  );
  return <div>{reactionsButtons}</div>;
}

export default ReactionButton;
