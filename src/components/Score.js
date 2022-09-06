import "./Score.css"

export default function Score({points, goHome}) {

    const handleClick = () => {
        goHome()
    }

    return (
        <div className="score">
            <div className="showingScore">
                <p>
                    Your Score: <span className={points<=5 ? "red" : "green"}>{points}</span> / 10
                </p>  
                <button onClick={handleClick}>
                    Go home
                </button>
            </div>
        </div>
    )
}