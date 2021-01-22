import React from 'react';
import './cardcomponent.css';
import { CardIndividual } from '../Card-indiviual/cardindividual';

export const CardComponent =(props)=>{
    return (<div className="card-list">
        {props.monsters.map(
          monster => <CardIndividual key={monster.id} monster={monster} />
        )}
    </div>);
}