
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useParams } from "react-router-dom";
const IndexVoice = () => {


    const {roomId} = useParams();
    let myMeeting = async (element) => {
        // generate Kit Token
        const appID = 1152525165;
        const serverSecret = '27239e4c733ab0aa877209bbca90c6fa';
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId,Date.now().toString(),roomId);


        // Create instance object from Kit Token.
        const zp = ZegoUIKitPrebuilt.create(kitToken);
        // start the call
        zp.joinRoom({
            container: element,
            sharedLinks: [
                {
                    name: 'Copy link',
                    url:
                        window.location.protocol + '//' +
                        window.location.host + window.location.pathname +
                        '?roomId=' +
                        roomId,
                },
            ],
            scenario: {
                mode: ZegoUIKitPrebuilt.OneONoneCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
            },
            showScreenSharingButton:false,
            showMyCameraToggleButton:false,
            turnOnCameraWhenJoining:false,
        });
    }


    return (
        <div
            ref={myMeeting}
        ></div>
    )
}
export default IndexVoice;