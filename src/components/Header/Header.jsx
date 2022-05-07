import "./Header.css"
import Ukraine from "./../../assets/ukraine.png"
import UK from "./../../assets/uk.png"
import { Link as LinkTo } from "react-scroll/modules"
import { Link } from "react-router-dom"



const Header = ({setState, state, project, setProject}) => {
return(
    <div className="header">
         {project === false ? <div className="header_menu">
      <div className="contacts_ref">{state === 'ua' ? <LinkTo   activeClass="active" to="contact" spy={true} smooth={true} offset={50} duration={500} style={{"cursor":"pointer"}}>Контакти</LinkTo>
      :  <LinkTo   activeClass="active" to="contact" spy={true} smooth={true} offset={50} duration={500} style={{"cursor":"pointer"}}>CONTACT DETAILS</LinkTo>}</div>
        <div  className="projects_ref" >{state === 'ua' ? <Link style={{'textDecoration': 'none', "color": "white"}} to='/projects' onClick={() => setProject(true)}>Проекти</Link>:<Link style={{'textDecoration': 'none', "color": "white"}} to='/projects' onClick={() => setProject(true)}>PROJECTS</Link>}</div>
        </div>:  
        <div className="header_menu">
       
       <div className="general_ref"> <Link style={{'textDecoration' : 'none', 'color' : 'white'}} onClick={() => setProject(false)}  to='/'>{state === 'ua' ? 'Головна':'GENERAL'}</Link></div>
        </div>}
       
        <div className="flags">

            <div className="UA" onClick={() => setState("ua")}>
                <img src={Ukraine} className="flags_img"/>
                <div className="flags_name" >{state === 'ua' ? <div style={{ "color": "white"}}>UA</div> : 'UA'}</div>
            </div>
            <div className="UK" onClick={() => setState("en")}>
                <img src={UK} className="flags_img"/>
                <div className="flags_name">{state === 'en' ? <div style={{ "color": "white"}}>EN</div> : 'EN'}</div>
            </div>
        </div>
    </div>
)
}




export default Header