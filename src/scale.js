import {useEffect, useState} from 'react'
import './scale.css';


export default function Scale({salary,comp}){
    const [salaries,setSalaries]=useState([])
   const [compR, setCompR] =useState([])
   const range=(min,max,step)=>{
    let tmp=[]    
    for(let i=min;i<=max;i+=step){
        tmp.push(i%1==0?i:Number(i).toFixed(1))
    }
    return tmp
   }
   const setStep=(min,max)=>{
    return  (max-min)/10
   }
    useEffect(()=>{ 
         
        setSalaries(range(salary.min,salary.max,setStep(salary.min,salary.max))) 
          setCompR(range(comp.min,comp.max,setStep(comp.min,comp.max)))
    },[salary,comp])
    return(
        <>
      <div style={{margin:"0%"}}>
          {/* vertical */}
      <div style={{position:"absolute",left:"40%",height:"100%"}}>
        <ul style={{position:"absolute",left:"20%",listStyle:"none"}}>
            {salaries.map((data,ind)=>{
                
                return <li style={{marginBottom:"100%"}} key={ind}> {data} -</li>
            })}
        </ul>
      <svg height="100%" width="40%">
  <line x1="40%" y1="0" x2="40%" y2="100%" style={{"stroke":"rgb(0,0,0)","strokeWidth":"5"}} />
  Sorry, your browser does not support inline SVG.
</svg>
      </div>
      {/* horizontal */}
      <div style={{position:"absolute", top:"40%", width:"100%"}}>
      <svg height="20%" width="100%">
  <line x1="0%" y1="20%" x2="100%" y2="20%" style={{"stroke":"rgb(0,0,0)","strokeWidth":"5"}} />
  Sorry, your browser does not support inline SVG.
  
</svg>
<div style={{position:"absolute",bottom:"45%",width:"100%"}}  >
<ul className='row' style={{listStyle:"none",padding:"none"}}>
            {compR.map((data,ind)=>{
                return (
                    <span>|
                    <li style={{margin:"0"}} key={ind}> {data}</li>
                    </span>
                )
            })}
        </ul>
</div>

      </div>
      </div>
        </>
    )
}