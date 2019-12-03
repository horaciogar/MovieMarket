import * as actionTypes from '../../actions/actionTypes';

const initialState = {
    similar: {},
    loading: true,
    error: false,
    errorMessage: {}
}

export default function tvSimilarReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.FETCH_TV_SIMILAR_START:
            return {
                ...state,
                error: false,
                loading: true
            }
        case actionTypes.FETCH_TV_SIMILAR_SUCCESS:
            return {
                ...state,
                similar: action.similar,
                error: false,
                loading: false
            }
        case actionTypes.FETCH_TV_SIMILAR_FAIL:
            return {
                ...state,
                errorMessage: action.errorMessage,
                error: true,
                loading: false
            }
        default: return state;
    }
}