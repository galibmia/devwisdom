import './App.css';
import Blogs from './component/Blogs/Blogs';
import Header from './component/Header/Header';
import "@fontsource/exo-2";
import "@fontsource/exo-2/400.css";
import "@fontsource/exo-2/400-italic.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Knowledge from './component/Knowledge/Knowledge';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Blogs></Blogs>
      <Knowledge></Knowledge>
      <ToastContainer />
    </div>
  );
}

export default App;
