import React from 'react'
import { useState } from 'react'

function Pet() {

    const [searchedValue, setsearchedValue] = useState('')

    const Search = (e) => {
        setsearchedValue(e.target.value)
    }

    return (
        <div>
            <div>
                <input type="text" placeholder='search' onChange={(e) => Search(e)} />
                <button>Adopt</button>
            </div>
            <p>{searchedValue}</p>
        </div>
    )
}

export default Pet