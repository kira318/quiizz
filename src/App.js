import { useEffect, useState } from 'react';
import Ques from './components/Ques';
import Score from './components/Score';
import Title from './components/Title';
import './App.css';

function App() {

  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const [ind, setInd] = useState(0)
  const [points, setPoint] = useState(0)
  const [play, setPlay] = useState(false)
  const [showScore, setShowScore] = useState(false)

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("https://opentdb.com/api.php?amount=10&type=boolean")
      const json = await res.json()
      setLoading(false)
      setData(json.results)
    }
    getData()
  }, [])

  const goNext = () => {
    if(ind+1 !== data.length){
      setInd(prev=>prev+1)
    }else{
      setShowScore(true)
      setPlay(false)
    }
  }

  const changePoint = () => {
    setPoint(prev=>prev+1)
  }

  const playGame = () => {
    setPlay(true)
  }

  const goHome = () => {
    setShowScore(false)
    setPoint(0)
  }

  return (
    <div className="App">
      
      {
        play && loading && 
        <div>loading...</div>
      }

      {
        !play && !showScore &&
        <Title
          playGame={playGame}
        /> 
      }

      {
        play && 
        <div>
          <Ques 
            qs={data} 
            ind={ind} 
            goNext={goNext} 
            changePoint={changePoint} 
          />
          <h2>
            Point : {points}
          </h2>
        </div>
      }

      {
        showScore && 
        <Score points={points} goHome={goHome}/>
      }

    </div>
  );
}

export default App;
