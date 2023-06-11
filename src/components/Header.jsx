import React, { useState } from 'react'
import { HiOutlineBell } from "react-icons/hi"
import { AiOutlineVideoCameraAdd } from "react-icons/ai"
import { BsSearch } from "react-icons/bs"
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {
    const [query, setQuery] = useState("");
    const navigate = useNavigate()
    const handleSearch = () => {
        if (!query) return;
        navigate(`/search-result/${query}`)
    }
    return (
        <header className='navbar bg-black text-light '>
            <Link to="/" className='text-decoration-none text-light'>
                <h1> <img src='https://cdn-icons-png.flaticon.com/512/1384/1384060.png ' style={{ width: '40px' }} /> YouTube</h1>
            </Link>




            <div className='d-flex'>
                <input type='text' className='form-control' onChange={(e) => setQuery(e.target.value)} />

                <button className='btn btn-secondary' onClick={handleSearch}>
                    <BsSearch />
                </button>
            </div>
            <span className='fs-5'>
                <AiOutlineVideoCameraAdd />


            </span>

            <span className='pe-3 fs-5'>
                <HiOutlineBell />
            </span>

        </header>
    )
}

export default Header