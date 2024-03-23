import { useState,useRef } from "react"
import ResultModal from "./ResultModal";


export default function TimerChallenge({title,targetTime}) {

    const timer=useRef();
    const dialogRef = useRef();
    
    // const [timerStarted,setTimerStarted] = useState(false);
    // const [timerExpired,setTimerExpired] = useState(false);

    const[timeRemaining,setTimeRemainig] = useState(targetTime*1000);
    
    const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000; 

    if(timeRemaining <=0)
    {
        clearInterval(timer.current);
       
        dialogRef.current.showModal();
    }

    function handleStart()
    {
        timer.current=setInterval(()=>{
            setTimeRemainig(prev=>prev-10);
        },10);

    }



    function handleStop()
    {
        dialogRef.current.showModal();
        clearInterval(timer.current);
        
    }

    function handleReset()
    {
        setTimeRemainig(targetTime*1000);
    }

    return(
        <>
        <ResultModal ref={dialogRef} targetTime={targetTime} remainingTime={timeRemaining} onReset={handleReset} />
        <section className="challenge">
            <h2>{title}</h2>
            
            
            <p className="challenge-time">
                {targetTime} second{targetTime >1 ? 's' : ''}
            </p>
            <p >
                <button onClick={timerIsActive? handleStop : handleStart}>
                    {timerIsActive? 'Stop' : 'Start'} Challenge
                </button>
            </p>
            <p className={timerIsActive? 'active' : undefined}>
                {timerIsActive? 'Time running' : 'Timer Inactive'}
            </p>

        </section>
        </>
    )
}
