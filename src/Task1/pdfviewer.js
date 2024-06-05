import React, { useState } from "react";
import Document from "./Function";
const PdfViewer = () => {
  const [pdf, setPdf] = useState();
  const [view, setView] = useState(null);
  const filetype = ["application/pdf"];
  const handleFile = (e) => {
    let file = e.target.files[0];
    if (file) {
      if (file && filetype.includes(file.type)) {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (e) => {
          setPdf(e.target.result);
        };
      } else setPdf(null);
    } else {
      alert("Please Update the PDF");
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (pdf !== null) setView(pdf);
    else setView(null);
  };
  return (
    <>
      <div className="container">
        <form>
          <input type="file" className="form-control" onChange={handleFile} />
          <button className="btn btn-success" onClick={handleSubmit}>
            View PDF
          </button>
        </form>
      </div>
      <div>
        <h2>View PDF</h2>
        <Document url={view} />
      </div>
    </>
  );
};
export default PdfViewer;
