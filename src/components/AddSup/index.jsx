import { useState } from "react";
import{ Input } from"../Input";
//import { Sup } from '../sup/index';
export const ADDSUP = (props) => {
    const[ title, setSups]=useState("please enter ur supjest");
    const handlesub = ()=> {
        props.addsup({title});
    };
    return(
    
        <div className= "p-3 m-2">
            <h1>ADD Supject</h1>
            <Input value={title} setValue={setSups} label="supject"/>
            <button onClick={handlesub} className="btn btn-primary"> Add sup</button>

        </div>

    );
}