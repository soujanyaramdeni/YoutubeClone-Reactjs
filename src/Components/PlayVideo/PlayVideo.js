import React, { useEffect, useState } from "react";
import "./PlayVideo.css";
import video from "../../Assets/video.mp4";
import like from "../../Assets/like.png";
import dislike from "../../Assets/dislike.png";
import share from "../../Assets/share.png";
import save from "../../Assets/save.png";
import photo from "../../Assets/photo.jpg";
import user_profile from "../../Assets/user_profile.jpg";
import { API_KEY, value_converter } from "../../data";
import moment from "moment";
import { useParams } from "react-router-dom";

const PlayVideos = () => {
    const {videoId}=useParams();
    const [apiData, setApiData] = useState(null);
    const [channelData, setChannelData]=useState(null);
    const [commentData, setCommentData]=useState([]);
    const fetchVideoData = async () => {
        //fetching video data
        const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
        await fetch(videoDetails_url).then(res => res.json()).then(data => setApiData(data.items[0]));
    }

    const fetchOtherData=async()=>{
        //fetching channeldata
        if(apiData){
        const channelData_url=`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`
        await fetch(channelData_url).then(res=>res.json()).then(data=>setChannelData(data.items[0]))
        .catch(error=>console.log("error fetching",error))
    }
    //fetching comment data
    const comment_url=`https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&key=${API_KEY}`
    await fetch(comment_url).then(res=>res.json()).then(data=>setCommentData(data.items))
}
    useEffect(() => {
        fetchVideoData();
    }, [videoId]);

useEffect(()=>{
fetchOtherData();
},[apiData])
    return (
        <div className="play-video">
            {/* <video src={video} controls autoPlay muted></video> */}
            <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <h3>{apiData?apiData.snippet.title:"Title Here"}</h3>
            <div className="play-video-info">
                <p>{apiData?value_converter(apiData.statistics.viewCount):"16K"}Views $bull;{apiData?moment(apiData.snippet.publishedAt).fromNow():""}</p>
                <div>
                    <span><img src={like} alt="" />{apiData?value_converter(apiData.statistics.likeCount):155}</span>
                    <span><img src={dislike} alt="" /></span>
                    <span><img src={share} alt="" />Share</span>
                    <span><img src={save} alt="" />  Save</span>
                </div>
            </div>
            <hr />
            <div className="publisher">
                <img src={channelData?channelData.snippet.thumbnails.default.url:""} alt="" />
                <div>
                    <p>{apiData?apiData.snippet.channelTitle:""}</p>
                    <span>{channelData?value_converter(channelData.statistics.subscriberCount):"1M"}Subscribers</span>
                </div>
                <button>Subscribe</button>
            </div>
            <div className="video-description">
                <p>{apiData?apiData.snippet.description.slice(0,250):"Description Here"}</p>
                <p>Subscribe ClipCove to watch more tutorias on web development</p>
                <hr />
                <h4>{apiData?value_converter(apiData.statistics.commentCount):102}Comments</h4>
                {commentData.map((item,index)=>{
                  return(
                    <div key={index} className="comments">
                    <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} />
                    <div>
                        <h3>{item.snippet.topLevelComment.snippet.authorDisplayName}<span>1 hr ago</span></h3>
                        <p>{item.snippet.topLevelComment.snippet.textDisplay.slice(0,150)}</p>
                        <div className="comment-action">
                            <img src={like} />
                            <span>{value_converter(item.snippet.topLevelComment.snippet.likeCount)}</span>
                            <img src={dislike} />
                        </div>
                    </div>
                </div>
                  )
                })}
                          
                </div>
        </div>
    )
}
export default PlayVideos