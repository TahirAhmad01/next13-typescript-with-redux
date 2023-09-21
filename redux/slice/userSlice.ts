import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUser = createAsyncThunk(
  "users/getAllUsers",
  async (thunkApi) => {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/users?limit=10"
    );
    const data = res.json();
    return data;
  }
);

const initialState = {
  userList: [],
  loading: false,
} as any;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.loading = false;
      state.userList.push(...action.payload);
    });

    builder.addCase(fetchUser.pending, (state, action) => {
      state.userList = [];
      state.loading = true;
    });
  },
});

export default userSlice.reducer;
