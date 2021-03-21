import { BOOKS_DATA, BOOKS_ERRORS, BOOKS_LOADING } from "redux/types/constants";

export const setLoading = (loading) => ({
    type: BOOKS_LOADING,
    loading
});

const loadData = async () => {

    const response = await fetch('https://swapi.dev/api/planets/')
    if (!response.ok) return []

    const json = await response.json()
    return json
}

export const getBooks = () => ({
    type: BOOKS_DATA,
    data: loadData()
});

export const setErrors = (errors) => ({
    type: BOOKS_ERRORS,
    errors
});