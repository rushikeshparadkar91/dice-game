import { createReducer } from 'redux-create-reducer';
import {
    SV_GAME_STATE,
    SV_PLAYER_JOINED,
    SV_PLAYER_LEFT,
    SV_GAME_STATE_CHANGED,
    SV_GAME_DATA_CHANGED
} from '../actions/game';

export const player = createReducer({ id: null, name: '' }, {
    [SV_GAME_STATE](state, action) {
        return {
            ...action.payload.player
        };
    }
});

export const game = createReducer({ stateName: '', players: [], gameData: {}, serverTime: 0 }, {
    [SV_GAME_STATE](state, action) {
        return {
            ...action.payload.state
        };
    },

    [SV_PLAYER_JOINED](state, action) {
        return {
            ...state,
            players: [...state.players, action.payload]
        };
    },

    [SV_PLAYER_LEFT](state, action) {
        return {
            ...state,
            players: state.players.filter(player => player.id !== action.payload.id)
        };
    },

    [SV_GAME_STATE_CHANGED](state, action) {
        return {
            ...state,
            stateName: action.payload
        };
    },

    [SV_GAME_DATA_CHANGED](state, action) {
        return {
            ...state,
            ...action.payload
        };
    }
});