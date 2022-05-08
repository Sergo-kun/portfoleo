
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import {useState} from "react"
import Header from './components/Header/Header';
import Projects from './pages/Projects/Projects';
function App() {
  const [state, setState] = useState("ua")
  const [project, setProject] = useState(false)
  
  return (
    <div className="App">
       <Header project={project} setProject={setProject} setState={setState} state={state}/>
      <Routes>
        <Route path="/" element={<Home  state={state}/>}/>
        <Route path="/projects" element={<Projects setProject={setProject}  state={state}/>}/>
    </Routes>
    </div>
  );
}

export default App;
