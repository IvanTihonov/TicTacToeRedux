import { PLAYER, STATUS } from "./constants";
import { ACTION_TYPE } from "./actions";
import { createEmptyField } from "./utils";

const initialState = {
    status: STATUS.TURN,
    currentPlayer: PLAYER.CROSS,
    field: createEmptyField(),
};

export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ACTION_TYPE.SET_CURRENT_PLAYER:
            return {
                ...state,
                currentPlayer: payload,
            };
        case ACTION_TYPE.SET_FIELD:
            return {
                ...state,
                field: payload,
            };
        case ACTION_TYPE.SET_STATUS:
            return {
                ...state,
                status: payload,
            };
        case ACTION_TYPE.RESTART_GAME:
            return initialState;
        default: 
            return state;
    }
};