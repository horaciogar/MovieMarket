import * as actionTypes from '../../actions/actionTypes';

const initialState = {
    keywords: {},
    loading: true,
    error: false,
    errorMessage: {}
}

export default function movieKeywordsReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.FETCH_MOVIE_KEYWORDS_START:
            return {
                ...state,
                error: false,
                loading: true
            }
        case actionTypes.FETCH_MOVIE_KEYWORDS_SUCCESS:
            return {
                ...state,
                keywords: action.keywords,
                error: false,
                loading: false
            }
        case actionTypes.FETCH_MOVIE_KEYWORDS_FAIL:
            return {
                ...state,
                errorMessage: action.errorMessage,
                error: true,
                loading: false
            }
        default: return state;
    }
}