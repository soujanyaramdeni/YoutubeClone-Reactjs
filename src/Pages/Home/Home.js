import React from "react";
import { useState } from "react";
import "./Home.css"
import Sidebar from "../../Components/Sidebar/Sidebar"
import Videocards from "../../Components/video-cards/Videocards"
const Home=({sidebar})=>{
    const [category, setCategory]=useState(0);
    return(
        <> 
<Sidebar sidebar={sidebar} category={category} setCategory={setCategory}/>
<div className={`container ${sidebar?"":"large-container"}`}>
<Videocards category={category}/>
</div>
        </>
    )
}
export default Home