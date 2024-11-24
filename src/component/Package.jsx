import React from 'react'

import {data} from "../data/data.js";


const Package = () => {
  return (
    <div>
      <div>
        <h1>Welcome to premium packages </h1>
      </div>
      <div>
{

data.map((element , index ) => {
  return ( 
    <div id={index}>
<img src={element.img}/>

<h1></h1>
      </div>
  )
})

}
      </div>
    </div>
  )
}

export default Package