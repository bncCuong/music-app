import { configureStore } from '@reduxjs/toolkit';

import { musicCoreApi } from './services/music-api';
import playerReducer from './features/playerSlice';

export const store = configureStore({
    reducer: {
        [musicCoreApi.reducerPath]: musicCoreApi.reducer,
        player: playerReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(musicCoreApi.middleware),
});
