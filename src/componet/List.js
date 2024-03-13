import React,{useEffect,useState} from 'react'

const List = ({arr}) => {
    const[data,setdata]=useState()
const[product,setProduct]=useState()

useEffect(()=>{
setProduct(arr)
},[arr])

function myfunction(){
   console.log(product)
}

  return (
    <div>
        <div>
           <input onChange={((e)=>{
            setdata(e.target.value)
           })}/>
        </div>
        <button onClick={(()=>{
            myfunction()
        })}>click</button>

    </div>
  )
}

export default List