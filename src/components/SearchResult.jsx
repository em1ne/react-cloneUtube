import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchDataFromApi } from '../utils/api';
import LeftNav from './LeftNav';

const SearchResult = () => {
    const { query } = useParams();
    const [result, setResult] = useState(null);
    useEffect(() => {
        fetchDataFromApi(`search/?q=${query}`).then((res) => {
            setResult(res.contents)
        })
    }, []);
    if (!result) return "Loading"

    return (
        <div>

        </div>
    )
}

export default SearchResult