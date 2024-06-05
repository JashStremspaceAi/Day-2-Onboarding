import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import HomePage from './HomePage';
import PdfViewer from './Task1/pdfviewer';
import AutoSuggest from './Task2/AutoSuggest';
import ImageCropping from './Task3/ImageCropping'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/pdfviewer' element={<PdfViewer/>} />
          <Route path='/autosuggest' element={<AutoSuggest/>}/>
          <Route path='/imagecropping' element={<ImageCropping/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
