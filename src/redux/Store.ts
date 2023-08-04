import { configureStore } from '@reduxjs/toolkit'
import WindowSlice from './slice/WindowSlice'
// ...

export const store = configureStore({
  reducer: {
    window: WindowSlice,
  
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch