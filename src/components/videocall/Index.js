import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useParams } from "react-router-dom";


const Index = ()=>{

    const {roomId} = useParams();

    const myMeeting = async (element)=>{
        const appId = 1152525165;
        const serverSecret = '27239e4c733ab0aa877209bbca90c6fa';
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appId,serverSecret,roomId,Date.now().toString(),roomId)
        const zc = ZegoUIKitPrebuilt.create(kitToken)
        zc.joinRoom({
            container:element,
            sharedLinks:[
                {
                    name:'Copy Link',
                    url:window.location.protocol + '//' +
                    window.location.host + window.location.pathname +
                    '?roomId=' +
                    roomId,
                }
            ],
            scenario:{
                mode: ZegoUIKitPrebuilt.OneONoneCall
            },
            showScreenSharingButton:true,
            
        })
    }

    return (
        <div>
            <div ref={myMeeting} />
        </div>
    )
}

export default Index;