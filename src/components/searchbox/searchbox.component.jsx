import React from 'react';

import './searchbox.style.css'

/**
 * Functional components => render HTML
 *   -> dont have access to state (no constructor)
 *   -> dont have access to life cycle methods
 * 
 */

export const Searchbox = ({placeholder, handleChange}) => (
    <input className = 'search' 
            type='search' 
            placeholder={placeholder}
            onChange = {handleChange}
        />
)