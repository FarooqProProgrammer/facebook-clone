import React from 'react'
import "./index.css"
import {Avatar} from "@chakra-ui/react"
 
export default function Header() {
    return (
        <nav>
            <div className='container'>
                <h2 className='log'>ThemeBook</h2>
                <div className='search-bar'>
                    <i className='uil uil-search' />
                    <input type='text' placeholder='Search' />
                </div>
                <div className='create'>
                    <label for="create post">create post</label>
                    <div className='profile-picture'>
                    <img src='https://bit.ly/dan-abramov' />

                    </div>
                </div>
            </div>
        </nav>
    )
}
