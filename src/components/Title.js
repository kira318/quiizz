import "./Title.css"

export default function Title({playGame}) {

    const go = () => {
        playGame()
    }

    return (
        <div className="title">
            <div>
                <h1>QUiiZZ</h1>
                <button onClick={go}>play</button>
            </div>
        </div>
    )
}