
import './HSkills.css'





const HSkills = ({hardSkill}) => {
return (
    <div className='skills'>
    {hardSkill.map(skill => <div className='name_skill'>{`${skill}`}</div>)}
   {/* <div className='last_skill'>Pre-Intermediate English Level</div>*/}
    </div>
)
}



export default HSkills