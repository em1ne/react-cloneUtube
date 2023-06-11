import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchDataFromApi } from '../utils/api'
import ReactPlayer from "react-player/youtube"
import loading from "../assets/loading.gif"
import { FcLike } from 'react-icons/fc'
import { RiMovieFill } from 'react-icons/ri'
import VideoCards from './VideoCards'


const VideoDetail = () => {
    const [video, setVideo] = useState(null)
    const [relatedVideos, setRelatedVideos] = useState([])
    //urlden parametre çekme islemi
    const { videoId } = useParams();

    useEffect(() => {
        fetchVideoDetails();
        fetchRelatedVideos();
    }, [])
    const fetchVideoDetails = () => {
        fetchDataFromApi(`video/details/?id=gVfkzZSpmNc`)
            .then((res) => {
                setVideo(res);
            })
    }

    const fetchRelatedVideos = () => {
        fetchDataFromApi(`video/related-contents/?id=gVfkzZSpmNc`).then((res) => {
            setRelatedVideos(res.contents);
        })
    }

    return (
        <div className='d-flex gap-2 bg-black text-light p-3' style={{ minHeight: '100vh' }}>
            {/* eger video yüklenmemisse */}
            {!video && (<img className='loading' src={loading} />)}
            {/* apiden cevap gelirse */}
            {video && (
                <>
                    <div className='flex-grow-1'>
                        <ReactPlayer url={`https://www.youtube.com/watch?v=gVfkzZSpmNc`} controls playing={true} width="100%" height="80vh" />
                        <div>
                            <h3>{video.title}</h3>
                            <div className='d-flex gap-5'>
                                <img src={video.author.avatar[0].url} />
                                <p>{video.author.title}</p>
                                <p>{video.author.stats.subscribersText}</p>
                                <p><FcLike />Likes:{video.stats.likes}</p>

                                <p><RiMovieFill />Views:{video.stats.views}</p>
                            </div>
                        </div>
                    </div>

                </>
            )}

        </div>
    )
}

export default VideoDetail