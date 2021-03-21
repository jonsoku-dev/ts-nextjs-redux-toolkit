import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { FeatureKey } from '@/store/FeatureKey';
import { JsonTodo } from '@/type';
import axios from 'axios';

/**
 * 비동기
 */
export const fetchAllTodosAction = createAsyncThunk(
  `${FeatureKey.TODOS}/fetchAll`,
  async () => {
    const url = `https://jsonplaceholder.typicode.com/todos`;
    const result: JsonTodo[] = await axios
      .get(url)
      .then((response) => response.data);
    return { asyncTodos: result };
  },
);

/**
 * Slice
 */
export const jsonTodosSlice = createSlice({
  name: FeatureKey.TODOS,
  initialState: {
    todos: [] as JsonTodo[],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllTodosAction.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchAllTodosAction.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.todos.push(...payload.asyncTodos);
    });
    builder.addCase(fetchAllTodosAction.rejected, (state) => {
      state.loading = false;
    });
  },
});

/**
 * Actions
 */

export const jsonTodosActions = {
  ...jsonTodosSlice.actions,
  fetchAllTodosAction,
};
