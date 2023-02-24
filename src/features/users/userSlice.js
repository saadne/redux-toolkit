import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, name: "Saadne" },
  { id: 2, name: "Deyah" },
  { id: 1, name: "Abdellahi" },
];

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default userSlice.reducer;
