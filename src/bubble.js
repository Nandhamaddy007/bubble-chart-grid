import { useEffect, useState } from 'react'
import './bubble.css'
export default function Bubble({data,salary,comp}){    
    useEffect(()=>{
        
    },[])

    return(<>
    {data.map((bubble,ind)=>{
        console.log("left",(bubble.headcount/comp.max)*100+"%",
        "top",(bubble.salary/salary.max)*100+"%",bubble.title)
        return(
            <>
            <div className="bubble" key={ind}
    style={{height:Math.abs(bubble.compratio)+"px", 
    width:Math.abs(bubble.compratio)+"px",
    background:"#"+Math.floor(Math.random()*16777215).toString(16),
    position:"absolute",
    left:((((bubble.headcount-comp.min)/(comp.max-comp.min))*100)-2)+"%",
    top:((((bubble.salary-salary.min)/(salary.max-salary.min))*100)-5)+"%"

}
}
    >
        {bubble.title}
    </div>
            </>
        )
    })}
    </>)

}