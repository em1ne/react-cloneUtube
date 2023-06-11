import { useContext } from 'react'
import { Context } from '../context/contextApi'
import LeftNav from './LeftNav';
import VideoCards from './VideoCards';

const Feed = () => {
    //contex içerisine atılan videoları çekme
    const { searchResult } = useContext(Context)
    return (
        <div className='d-flex bg-black ' style={{ minHeight: '100vh' }}>
            <LeftNav />
            <div className='w-100 p-4 videos '>
                {searchResult.map((video, index) => (
                    <VideoCards key={index} video={video} />
                ))}
            </div>
        </div>
    )
}

export default Feed