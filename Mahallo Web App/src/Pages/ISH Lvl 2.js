import React from 'react';
import './ISH Lvl 2.css'

function ISH2({goToLevel2}){
    return (
        <div className="ish2-page">
            <header className='ish2-header'>
             <h1>ISH level 2</h1>
             <p> Example of a location</p>
              <button className = 'back-button' onClick={goToLevel2}>Back</button>
            </header>
        </div>
    );
};

export default ISH2;
