import axios from 'axios'
import {useEffect, useState} from 'react'
import Bubble from './bubble'
import Scale from './scale'

export default function Layout(props){

    const [salaryMinMax,setSalaryMinMax]=useState(-1)
    const [compMinMax ,setCompMinMax] =useState(-1)
    const [data,setData]=useState([])
    const getSalaries=(data)=>{
        let temp=[]
        let temp2=[]
        for(let elem of data){
            temp.push(elem.salary)
             temp2.push(elem.headcount)
        }        
        return [temp,temp2]
        // return [temp,temp2]
    }
    const getMinAndMax=(arr,arr2)=>{
        let min="",max="";
        let minc="",maxc=""
        for(let e in arr){
            if(min==""){min=arr[e]}
            if(max==""){max=arr[e]}
            if(arr[e]<min){min=arr[e]}
            if(arr[e]>max){max=arr[e]} 
            if(minc==""){minc=arr2[e]}
            if(maxc==""){maxc=arr2[e]}
            if(arr2[e]<minc){minc=arr2[e]}
            if(arr2[e]>maxc){maxc=arr2[e]}        
        }
        return [[min,max],[minc,maxc]]
    }
    useEffect(()=>{
        axios.get("https://mocki.io/v1/18936d28-2f79-4840-b146-5622e8ad1e77").then((res)=>{
            console.log(res)
            setData(res.data)
            let [salaries,comp]=getSalaries(res.data)
            let minMax=getMinAndMax(salaries,comp)            
            setSalaryMinMax(minMax[0])
             setCompMinMax(minMax[1])
        }).catch((err)=>{
            console.log(err)
        })
    },[])
    return (

        <>
        <Scale salary={{min:salaryMinMax[0],max:salaryMinMax[1]}} 
         comp={{min:compMinMax[0],max:compMinMax[1]}} 
        />
        <Bubble data={data}
        salary={{min:salaryMinMax[0],max:salaryMinMax[1]}} 
        comp={{min:compMinMax[0],max:compMinMax[1]}} 
        />
        </>
    )
}