import { forwardRef,useImperativeHandle, useRef } from "react";
import {createPortal} from 'react-dom';

const Resultmodal =forwardRef( function Resultmodal({remain,reset,target} , ref){
    
    const won = remain > 0;
    const timeRemain = (remain / 1000).toFixed(2);
    const score = Math.round((1-remain/(target*1000))*100);
    const dialog =useRef();

    useImperativeHandle(ref , ()=>{
        return {
            modal() {
               dialog.current.showModal();
            }
        }
    })
    return(
        createPortal(<dialog ref={dialog} class="result-modal">
            <h2>You {won? `Your Score: ${score}` : "lost"}</h2>
            <p>The Target Time was <strong>{target}</strong> seconds.</p>
            <p>The Time left was <strong>{timeRemain}</strong> seconds.</p>
            <form method="dialog" onSubmit={reset}>
                <button>Close</button>
            </form>
        </dialog>, document.getElementById('modal'))
    )
});

export default Resultmodal;