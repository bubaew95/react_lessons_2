import React from 'react'
import { BOOKS_DATA, BOOKS_ERRORS, BOOKS_LOADING } from 'redux/types/constants'

const initialState = {
    loading: true,
    data: [],
    errors: null
}

export default (state = initialState, action) => {

    switch (action.type) {
        case BOOKS_LOADING:
            return {
                ...state,
                loading: action.loading
            }

        case BOOKS_DATA:
            return {
                ...state,
                loading: false,
                errors: null,
                data: action.data
            }
        case BOOKS_ERRORS:
            return {
                ...state,
                loading: false,
                errors: action.errors,
                data: []
            }

        default:
            return state
    }
}