
import { forwardRef } from "react";
import { createPortal } from 'react-dom';

const ResultModal = forwardRef(function ResultModal({targetTime,remainingTime,onReset},ref) {

    const userLost= remainingTime <=0;

    const formattedTime=(remainingTime/1000).toFixed(2);

    const score= Math.round((1 - remainingTime / (targetTime * 1000))*100);
    
    return(
        createPortal(<dialog ref={ref} className="result-modal" onClose={onReset}>
        {userLost && <h2> You lost </h2> }
        {!userLost && <h2>Your Score: {score}</h2>}
        <p>The target time was <strong>{targetTime} seconds .</strong> </p>
        <p>You stopped the Timer with <strong>{formattedTime} seconds left .</strong> </p>
        <form action="" method="dialog" onSubmit={onReset}>
            <button >Close</button>
        </form>
    </dialog>,
    document.getElementById('modal')
    )
        
    ) 
}
)


export default ResultModal;