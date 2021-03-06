import {createActions, handleActions} from 'redux-actions';
import axios from 'axios'

const rootURL = 'https://profile-api.test.hel.ninja/profile-test/v1' 

// TODO: Replace this with env setting?

export const {
    getInterest,
    getInterestSuccess,
    getInterestError,
    setInterest,
} = createActions({
    GET_INTEREST: undefined,
    GET_INTEREST_SUCCESS: undefined,
    GET_INTEREST_ERROR: error => ({error}),
    SET_INTEREST: interest => ({interest}),
})

export const {
    getProfile, getProfileSuccess, getProfileError,
    updateProfile, updateProfileSuccess, updateProfileError,
    setUserProfile,
} = createActions({
    GET_PROFILE: undefined,
    GET_PROFILE_SUCCESS: undefined,
    GET_PROFILE_ERROR: error => ({error}),
    UPDATE_PROFILE: payload => ({payload}),
    UPDATE_PROFILE_SUCCESS: undefined,
    UPDATE_PROFILE_ERROR: error => ({error}),
    SET_USER_PROFILE: user => ({user}),
})

const userDefaultState = {
    user: {},
    error: null,
    interests: {},
}
export const userReducer = handleActions(
    new Map([
        [
            getProfile, (state, action) => ({
                ...state,
                error: userDefaultState.error,
            }),
        ],
        [
            getProfileSuccess, (state, action) => ({
                ...state,
                error: userDefaultState.error,
            }),
        ],
        [
            getProfileError, (state, action) => ({
                ...state,
                error: action.payload,
            }),
        ],
        [
            updateProfile,
        ],
        [
            updateProfileSuccess, (state, action) => ({
                ...state,
                error: userDefaultState.error,
            }),
        ],
        [
            updateProfileError, (state, action) => ({
                ...state,
                error: action.payload.error,
            }),
        ],
        [
            setUserProfile, (state, action) => ({
                ...state,
                user: action.payload.user,
            }),
        ],
        [
            getInterest,
        ],
        [
            getInterestSuccess, (state, action) => ({
                ...state,
                error: userDefaultState.error,
            }),
        ],
        [
            getInterestError, (state, action) => ({
                ...state,
                error: action.error,
            }),
        ],
        [
            setInterest, (state, action) => ({
                ...state,
                interests: action.payload.interest,  
            }),
        ],
    ]),
    userDefaultState
);

export const fetchUserData = () => {
    return async (dispatch) => {
        dispatch(getProfile())

        try {
            const response = await axios.get(`${rootURL}/profile/`)
            dispatch(getProfileSuccess())
            dispatch(setUserProfile(response))
        } catch (error) {
            dispatch(getProfileError(error))
        }

    }
}

export const updateUserData = (payload) => {
    return async (dispatch) => {
        dispatch(updateProfile())

        try {
            const response = await axios.post(`${rootURL}/profile/`, payload)
            dispatch(updateProfileSuccess())
            dispatch(setUserProfile(response.data))
        } catch (error) {
            dispatch(updateProfileError(error))
        }
    }
}

export const getUserInterest = (payload) => {
    return async (dispatch) => {
        dispatch(getInterest())

        try {
            const response = await axios.get(`${rootURL}/interest-concept/`)
            dispatch(getInterestSuccess())
            dispatch(setInterest(response.data.results))
        } catch (error) {
            dispatch(getInterestError(error))
        }
    }
}
