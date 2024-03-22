import React from "react";
import "./Sidebar.css"
import home from "../../Assets/home.png";
import game_icon from "../../Assets/game_icon.png";
import automobiles from "../../Assets/automobiles.png";
import sports from "../../Assets/sports.png";
import entertainment from "../../Assets/entertainment.png";
import tech from "../../Assets/tech.png";
import music from "../../Assets/music.png";
import blogs from "../../Assets/blogs.png";
import news from "../../Assets/news.png"
import profile from "../../Assets/photo.jpg";
import simon from "../../Assets/simon.png";
import tom from "../../Assets/tom.png";
import megan from "../../Assets/megan.png";
import cameron from "../../Assets/cameron.png";

const Sidebar = ({sidebar,category,setCategory}) => {
    return (
        <div className={`sidebar ${sidebar?"":"small-sidebar"}`}>
            <div className="shortcuts">
                <div className={`sidelink ${category===0?"active":""}`}onClick={()=>setCategory(0)}>
                    <img src={home} alt=""/><p>Home</p>
                </div>
                <div className={`sidelink ${category===20?"active":""}`}onClick={()=>setCategory(20)}>
                    <img src={game_icon} alt=""/><p>Gaming</p>
                </div>
                <div className={`sidelink ${category===2?"active":""}`}onClick={()=>setCategory(2)}>
                    <img src={automobiles} alt=""/><p>Automobiles</p>
                </div>
                <div className={`sidelink ${category===17?"active":""}`}onClick={()=>setCategory(17)}>
                    <img src={sports} alt=""/><p>Sports</p>
                </div>
                <div className={`sidelink ${category===24?"active":""}`}onClick={()=>setCategory(24)}>
                    <img src={entertainment} alt=""/><p>Entertainment</p>
                </div>
                <div className={`sidelink ${category===28?"active":""}`}onClick={()=>setCategory(28)}>
                    <img src={tech} alt=""/><p>Technology</p>
                </div>
                <div className={`sidelink ${category===10?"active":""}`}onClick={()=>setCategory(10)}>
                    <img src={music} alt=""/><p>Music</p>
                </div>
                <div className={`sidelink ${category===22?"active":""}`}onClick={()=>setCategory(22)}>
                    <img src={blogs} alt=""/><p>Blogs</p>
                </div>
                <div className={`sidelink ${category===25?"active":""}`}onClick={()=>setCategory(25)}>
                    <img src={news} alt=""/><p>News</p>
                </div>
                <hr/>
            </div>
            <div className="subscribers">
                <h3>Subscribed</h3>
                <div className="sidelink">
                  <img src={profile} alt=""/><p>YouTuber</p>
                </div>
                <div className="sidelink">
                  <img src={simon} alt=""/><p>Person1</p>
                </div>
                <div className="sidelink">
                  <img src={tom} alt=""/><p>person2</p>
                </div>
                <div className="sidelink">
                  <img src={megan} alt=""/><p>person3</p>
                </div>
                <div className="sidelink">
                  <img src={cameron} alt=""/><p>person4</p>
                </div>
            </div>

        </div>
    )
}
export default Sidebar