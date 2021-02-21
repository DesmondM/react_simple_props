import React from 'react'
const ChildComponent =props=>{
    return(
        <div>
            <input type="text" placeholder ="update name..." onChange={(event)=>props.onChange(event.target.value)}/>
        </div>
    )
}
export default ChildComponent;