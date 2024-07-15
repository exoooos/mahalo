import React from 'react';
import './ISH Lvl 1.css'

function ISH1({goToAlt}){
    return (
        <div className="ish1-page">
            <header className='ish1-header'>
             <h1>ISH level 1</h1>
             <p> Example of a location</p>
              <button className = 'back-button' onClick={goToAlt}>Back</button>
            </header>
        </div>
    );
};

export default ISH1;
