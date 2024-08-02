import {useRef,useState} from 'react';
import Resultmodal from './Resultmodal.jsx';

export default function Timer({title,target}){
    const timer =useRef();
    const dialog = useRef();
    const [timeremaining ,settimeremaining] = useState(target*1000);

    const timeractive = timeremaining > 0 && timeremaining < target*1000;

    if(timeremaining <= 0){
        clearInterval(timer.current);
        dialog.current.modal();
    }

    function resetTimer(){
        settimeremaining(target*1000);
    }

    function handlestart(){
        timer.current =setInterval(()=>{
          settimeremaining((prev) => prev-10);
        } ,10);
    }

    function handlestop(){
        clearInterval(timer.current);
        dialog.current.modal();
    }

    return(
        <>
        <Resultmodal ref={dialog} target={target} remain={timeremaining} reset={resetTimer}/>
        <section className="challenge">
            <h2>{title}</h2>
            <p className="challenge-time">
                {target} Second{target > 1? 's' : ''}
            </p>
            <p>
                <button onClick={timeractive? handlestop : handlestart }>Start Challenge</button>
            </p>
            <p className={timeractive ? 'active' : undefined}>
               {timeractive ? 'Its Ticking' : 'Not Running'}
            </p>
        </section>
        </>
    )

}