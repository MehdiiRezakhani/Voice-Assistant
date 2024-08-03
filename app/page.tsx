"use client";
import Image from "next/image";
import React, { useState } from "react";
import RadioButtons from "./components/RadioButtons";
import Recorder from "./home/Recorder";

//assets
import Logo from './assets/memoryto.png';

const Home: React.FC = () => {
  const [responseMode, setResponseMode] = useState("text");
  const [assistantResponse, setAssistantResponse] =
    useState<JSX.Element | null>();

  const options = [
    { value: "text", label: "Text" },
    { value: "audio", label: "Audio" },
  ];

  return (
    <>
      <div className="logoBox">
        <Image 
          src={Logo} 
          alt="Memoryto Logo" 
          width={50}
          height={25}
        />
      </div>
      <div className="container">
        <h1>Voice Assistant Simulator</h1>
        <div>
          <RadioButtons
            options={options}
            selectedValue={responseMode}
            setSelectedValue={setResponseMode}
          />
          <Recorder
            responseMode={responseMode}
            setAssistantResponse={setAssistantResponse}
          />
        </div>
        <div className="responseContainer">{assistantResponse}</div>
        <div className="author">
          <p>Developed by <a href="https://www.linkedin.com/in/mehdiirezakhani/" target="blank">Mehdi Rezakhani</a></p>
        </div>
      </div>
    </>
  );
};

export default Home;
