import { Link } from 'react-router-dom';
import millify from 'millify';
import SearchResult from './SearchResult';

const VideoCards = ({ video, }) => {
    return (
        <Link to={`/watch/${video.video.videoId}`} className='text-decoration-none'>
            <div className='text-light '>
                <div>
                    <img className="rounded" src={video.video.thumbnails[0].url} />

                </div>
                <div className="d-flex gap-2 p-2">
                    <img className="chanel-img"
                        src={video.video.author.avatar[0].url} />
                    <div >
                        <p className="fw-bold">{video.video.title}</p>
                        <p>{video.video.author.title}</p>

                        <div className="d-flex gap-3" >
                            <p>{millify(video.video.stats.views)}</p>
                            <p>{video.video.publishedTimeText}</p>
                        </div>

                    </div>
                </div>


            </div>
        </Link>
    )
}
export default VideoCards;