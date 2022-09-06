import { useState } from "react"
import "./Ques.css" 

export default function Ques({qs, ind, goNext, changePoint}) {

    const [select, setSelect] = useState(null)
    const [disable, setDisable] = useState(false)
    const [lastClick, setLastClick] = useState(null)

    const checkAns = () => {
        if(select !== null){
            onlySelctOne()
            setSelect(null)
            if(select === qs[ind].correct_answer){
                lastClick.target.classList.add("green")
                changePoint()
            }else{
                lastClick.target.classList.add("red")
            }
            setDisable(true)
        }
    }

    const clickHandle = (ev) => {
        if(!disable){
            onlySelctOne()
            ev.target.classList.add("slct")
            setSelect(ev.target.value)
            setLastClick(ev)
        }
    }

    const onlySelctOne = () => {
        document.querySelectorAll("button")[0].classList.remove("slct")
        document.querySelectorAll("button")[1].classList.remove("slct")
    }
    
    const goingNext = () => {
        if(disable){
            setDisable(false)
            lastClick.target.classList = []
            goNext()
        }
    }
    return (
        <div className="ques">
            {
                qs[ind] && 
                <div>
                    <h2>{qs[ind].question}</h2>
                        <button onClick={clickHandle} value="True">True</button><br />
                        <button onClick={clickHandle} value="False">False</button><br />
                        <button onClick={checkAns} className="submit">Submit</button>
                        <button onClick={goingNext} className="submit">Next</button>
                </div>
            }
        </div>
    )
}

