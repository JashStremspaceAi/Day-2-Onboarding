import React, { useState } from "react";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
const Document = ({ url }) => {
  const pulg = defaultLayoutPlugin();
  return (
    <div
      style={{
        width: "100%",
        height: "800px",
        overflowY: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        {url && (
          <>
            <Viewer fileUrl={url} plugins={[pulg]} />
          </>
        )}
        {!url && <>No PDF</>}
      </Worker>
    </div>
  );
};

export default Document;
