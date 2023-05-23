import './App.css';
import AllPages from './components/AllPages';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VideoCall from './components/videocall/VideoCall';
import Index from './components/videocall/Index';
import IndexVoice from './components/VoiceCall/IndexVoice';
import VoiceCall from './components/VoiceCall/VoiceCall';
import Chat from './components/chatting/Chat';
import IndexChat from './components/chatting/IndexChat';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" >
          <Route index element={<AllPages />} />
          <Route path='vc' element={<VideoCall />} />
          <Route path='voice' element={<VoiceCall />} />
          <Route path='chat' element={<Chat />} />
          <Route path='vc/room/:roomId' element={<Index />} />
          <Route path='voice/room/:roomId' element={<IndexVoice />} />
          <Route path='chat/room/:roomId' element={<IndexChat />} />

        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
