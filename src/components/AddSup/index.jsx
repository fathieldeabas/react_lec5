import { useState } from "react";
import{ Input } from"../Input";
import{usePostPosts} from "../../hooks"
//import { Sup } from '../sup/index';
export const ADDSUP = (props) => {
    const[ title, setSups]=useState("please enter ur supjest");
    const post= usePostPosts()


    const handlesub = ()=> {
        props.addsup({title});
        const body= {
            title: title,
            body: 'fathi',
            userId: 1,
            id:	101
        }
        post(body)
    };
    return(
    
        <div className= "p-3 m-2">
            <h1>ADD Supject</h1>
            <Input value={title} setValue={setSups} label="supject"/>
            <button onClick={handlesub} className="btn btn-primary"> Add sup</button>

        </div>

    );
}


///////////////////////
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
