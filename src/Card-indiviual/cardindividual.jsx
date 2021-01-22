import React from 'react';
import './cardindividual.css';

export const CardIndividual =(props) => {
    return (
        <div className="card-container">
            <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set2`} />
            <h1>{props.monster.name}</h1>
            <p>{props.monster.email}</p>
        </div>
    );
}