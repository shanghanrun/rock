import React from 'react'

const Box = ({name, item}, result) => {
  let myResult;
  if(result == 'Win'){
    if(name == 'YOU'){
      myResult = 'Winner'
    } else {
      myResult = 'Loser'
    }
  } else if(result =='Lose'){
    if(name == 'YOU'){
      myResult = 'Loser'
    } else{
      myResult = 'Winner'
    }
  } else{
    myResult = 'Tie';
  }

  return (
    <div className="box">
        <h1>{name}</h1>
        <img src={item && item.img} alt=""></img>
        <h1>{myResult}</h1>
    </div>
  )
}

export default Box