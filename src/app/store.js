import { configureStore } from "@reduxjs/toolkit";
import PostReducer from "../features/posts/PostSlice";

export const store = configureStore({
  reducer: {
    posts: PostReducer,
  },
});
