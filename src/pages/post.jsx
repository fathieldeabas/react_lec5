import { useState } from "react";
import { ViewSup} from "../components/View";
import { ADDSUP } from "../components/AddSup";
export const Posts = (props) =>{
    const [sups,setsups]=useState([])
    const addsup = (newsup) =>{

        setsups([...sups,newsup])
    };
    const handledelete = ()=>{
        setsups([])
    };
    return (
        <>
            <h1> posts_page</h1>
            <div className="row">
                    <div className="col-6">
                    <ADDSUP addsup={addsup}/>
                    </div>
                    <div className="col-6">
                    <ViewSup sups={sups} onDelete={handledelete}/>
                </div>

            </div>    
        
        
        </>
    )
}