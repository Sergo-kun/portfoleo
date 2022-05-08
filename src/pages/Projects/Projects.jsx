import './Projects.css'
import Tic from "../../assets/Tik.png" 
import HiPeople from "../../assets/HiPeople.png"
import { useEffect } from 'react'




const Projects = ({state, setProject}) => {
   useEffect(() => {
    setProject(true)
   },[])
const projects = [
    {name : "Tic Tac Toe", photo: Tic, deskEn: "Just a game of tic-tac-toe", deskUa: "Просто гра в хрестики-нулики", link: "https://tik-tak-toe-mu.vercel.app/"},
    {name : "HiPeople", photo: HiPeople, deskEn: "Demo-version of social-network ", deskUa: "Демо-версія соцмережі", link: "https://github.com/Sergo-kun/HiPeople"}
]

return (
    <>
    <div className='proj_title'>{state === 'ua' ? 'Проекти' : 'Projects'}</div>
    <div className="projects">
        {projects.map(proj => 
        <a href={proj.link} className='project'>
            <div className='proj_name'>{proj.name}</div>
            <img className='proj_img' src={proj.photo}/>
            <div className='proj_desk'>{state === 'ua' ? proj.deskUa : proj.deskEn}</div>
        </a>)}
    </div>
    </>
)
}





export default Projects