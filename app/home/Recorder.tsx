import Image from "next/image";
import { useState, useRef } from "react";

import { fetchData } from "../utils/common.util";
import Loading from "../components/Loading";

//assets
import record_Icon from '../assets/record_Icon.svg';
import stop_Icon from '../assets/stop_Icon.svg';


type RecorderType = {
  responseMode: string;
  setAssistantResponse: (response: JSX.Element | null) => void;
};

const Recorder: React.FC<RecorderType> = ({
  responseMode,
  setAssistantResponse,
}) => {
  const [isRecording, setIsRecording] = useState(false);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  
  const handleStartStopRecording = () => {
    if (isRecording) {
      mediaRecorderRef.current?.stop();
      setIsRecording(false);
    } else {
      navigator.mediaDevices
        .getUserMedia({ audio: true })
        .then((stream) => {
          mediaRecorderRef.current = new MediaRecorder(stream);
          mediaRecorderRef.current.ondataavailable = (event) => {
            audioChunksRef.current.push(event.data);
          };
          mediaRecorderRef.current.onstop = async () => {
            const audioBlob = new Blob(audioChunksRef.current, {
              type: "audio/wav",
            });
            audioChunksRef.current = [];
            if (responseMode === "audio") {
              setAssistantResponse(<Loading />);
              setTimeout(() => {
                const audioUrl = URL.createObjectURL(audioBlob);
                setAssistantResponse(
                  <audio src={audioUrl} controls autoPlay />
                );
              }, 3000);
            } else {
              setAssistantResponse(<Loading />);
              const data = await fetchData<{ message: string }>("https://run.mocky.io/v3/fa29bc2b-c7f7-458c-b7f0-0da300eec582");
              setAssistantResponse(<p>{data.message}</p>);
            }
          };
          mediaRecorderRef.current.start();
          setIsRecording(true);
          setAssistantResponse(null);
        })
        .catch((error) => console.error("Error accessing microphone:", error));
    }
  };

  return (
    <div>
      <button className="button" onClick={handleStartStopRecording}>
        {isRecording ? 
         <Image src={stop_Icon} alt="Stop Icon" width={100} height={100}/>
         : 
         <Image src={record_Icon} alt="Record Icon" width={100} height={100}/>
        }
      </button>

      {isRecording && (
        <div className="recording-indicator">
          <p style={{ color: "white", fontWeight: "bold" }}>Recording</p>
          <div className="blink"></div>
        </div>
      )}
    </div>
  );
};

export default Recorder;
