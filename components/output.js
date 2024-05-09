import React from 'react';
import OutputRow from './outputRow';
const Output = props=>{
    return(
        <div>
            <OutputRow value={props.answer} textsize={{fontsize:'20px'}}/>
            <OutputRow value={props.user} textsize={{fontsize:'20px'}}/>
        </div>
    )
}

export default Output;
