import { Link } from 'react-router-dom';
import './bottom.css'

const Bottom = ()=>{
    return (
        <div className='bottompage'>
            <Link to='chat' className='types'><span>
            <span className="material-symbols-outlined icons" >chat</span>
            <div className='type'>Chat</div>
            </span></Link>
            <Link to='voice' className='types'><span>
            <span className="material-symbols-outlined icons">call</span>
            <div className='type'>Call</div>
            </span></Link>
            <Link to='vc' className='types'><span>
            <span className="material-symbols-outlined icons">video_call</span>
            <div className='type'>Video call</div>
            </span></Link>
        </div>
    )
}
export default Bottom;