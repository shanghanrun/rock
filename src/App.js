import './App.css';
import { useState } from 'react';
import Box from './component/Box';

function App() {
  const btns = [ 'img/s.jpg', '/img/r.jpg', '/img/p.jpg'];
  const choice ={
    rock: {
      name: 'Rock',
      img: '/img/rock.jpg'
    },
    scissors:{
      name: 'Scissors',
      img: '/img/scissors.jpg'
    },
    paper:{
      name: 'Paper',
      img: '/img/paper.jpg'
    }
  };

  const [userSelect, setUserSelect] = useState(null)
  const [comSelect, setComSelect] = useState(null)
  const [result, setResult] = useState('Win')
  
  function play(userChoice){
    console.log('userChoice : ',userChoice )
    setUserSelect(choice[userChoice])

    const list = ['rock', 'scissors', 'paper'];
    let temp = Math.floor(Math.random()*3)
    let comChoice = list[temp]
    console.log('comChoice : ', comChoice )
    setComSelect(choice[comChoice])

    setResult(calc(userChoice, comChoice))
  }
  function calc(you, com){
    if(you == 'scissors'){  //기위
      if(com == 'scissors'){ //가위
        return 'Tie';
      } else if(com =='rock'){ //바위
        return 'Lose';
      } else {
        return 'Win'
      }
    } else if(you =='rock'){ //바위
      if(com == 'scissors'){ //가위
        return 'Win'
      } else if( com =='rock'){ //바위
        return 'Tie'
      } else {
        return 'Lose'
      }
    } else{ // 보
      if(com =='scissors'){ //가위
        return 'Lose'
      } else if(com =='rock'){//바위
        return 'Win'
      } else{
        return 'Tie'
      }
    }
  }


  return (
    <div className="App">
      <div className='match'>
        <Box name="YOU" item={userSelect} result={result}/>
        <Box name="COMPUTER" item={comSelect} result={result}/>
      </div>
      <div className="btns">
          <button onClick={()=>play('scissors')} id="s">가위</button>
          <button onClick={()=>play('rock')} id="r">바위</button>
          <button onClick={()=>play('paper')} id="p">보</button>
      </div>
      <div className='result'>
        <h1>{result}</h1>
      </div>
    </div>
  );
}

export default App;