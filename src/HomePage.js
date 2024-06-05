import React from "react";
import { useNavigate } from "react-router-dom";
import './App.css'
const HomePage = () => {
    const nav=useNavigate();
    const handlePDFTask=()=>{
        nav('/pdfviewer')
    }
    const handleAutoSuggestTask=()=>{
        nav('/autosuggest')
    }
    const handleImageCroppingTask=()=>{
        nav('/imagecropping')
    }
  return (
    <>
      <div>
        <h1>HomePage</h1>
      </div>
      <button onClick={handlePDFTask}><span>
         Pdf Viewer Task1
        </span>
    </button>
    <button onClick={handleAutoSuggestTask}><span>
         Auto Suggest Task2
        </span>
    </button>
    <button onClick={handleImageCroppingTask}><span>
         Image Cropping Task3
        </span>
    </button>
    </>
  );
};
export default HomePage;
