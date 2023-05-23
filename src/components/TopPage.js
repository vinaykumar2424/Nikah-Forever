import video from '../contents/bgVideo.mp4'
import Bottom from './Bottom';
import './top.css'

const TopPage = () => {
    return (
        <div>
            <div>
                <video autoPlay muted loop >
                    <source src={video} type="video/mp4" />
                </video>
                <div className='app-name'>NIKAH FOREVER</div>
            </div>
            <div>
                <Bottom />
            </div>
        </div>
    )
}

export default TopPage;