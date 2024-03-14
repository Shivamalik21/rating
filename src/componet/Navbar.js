import React from 'react'

const Navbar = () => {
  return (
    <div style={{display:"flex", justifyContent:"space-around", borderBottom:"1px solid grey", alignItems:"center", height:"14vh", fontWeight:"bold", backgroundColor:"skyBlue", }}>
   <div><h1 id="headerh1" style={{}}>Geekfoods</h1>
   </div>
   <div>
    <ul style={{listStyle:"none", display:"flex", gap:"4vw"}} id="ulList">
        <li style={{color:"blue"}}>Home</li>
        <li>Quotes</li>
        <li>Resturants</li>
        <li>Foods</li>
        <li>Contact</li>

    </ul>
   </div>
   <button  id="btn" style={{width:"6vw", height:"3vw", backgroundColor:"red", border:"none", borderRadius:"10px",}}>Get started</button>
    </div>
  )
}

export default Navbar