import React from 'react';
import './searchbox.css';

export const SearchBox =(props) => {
    return (
        <div>
            <input className="search" type="search" placeholder={props.placeholder} onChange={props.changed} />
        </div>
    );
}