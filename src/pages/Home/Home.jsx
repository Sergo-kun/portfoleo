

import './Home.css';
import { Element } from 'react-scroll/modules';
import HSkills from '../../components/HSkills/HSkills';
import myPhoto from "../../assets/my_photo.HEIC"
 function Home({state}) {
  const hardSkill = [
    "JavaScript", "HTML", "CSS", "React", "Redux", "Node.js", 
    "GIT", "PHP", "jQuery", "Pre-Intermediate English Level"
  ]

  console.log(state)
  //"Pre-Intermediate English Level"
  return (
    <>
    
     {state === "ua" ?  <><div className='profile'>
     <img className='profile_img'  src={myPhoto}/>
    <div className='profile_name'>Коваленко Сергій 21 рік</div>
    <div className='position'>
       Позиція: Junior (Trainee) Full stack Developer
     </div>
     
    
     </div>
     <hr/>
     <div className='work_time'>
       Зайнятість: повна зайнятість.<br/>
       Графік роботи: гнучкий графік, повний день.
     </div>
     <hr className='hr2'/>
     <div className='hard_skill'>
       <div className='title'>КЛЮЧОВІ НАВИКИ</div>
      <HSkills  hardSkill={hardSkill}/>
     </div>
     <hr className='hr3'/>
     <div className='soft_skill'>
       <div className='title'>ОСОБИСТІ НАВИКИ</div>
      <div className='soft_skill_name'>
        Відповідальний, честний, порядний, здатний самонавчатися, не конфліктний, веселий.
      </div>
     </div>
     <hr className='hr4'/>
     <div className='about_me'>
       <div className='title'>Про мене</div>
       <div className='about_me_text'>
        <p style={{ "margin": 0,"text-indent": "3ch"}}>Початковий веб-розробник, бажаю розвиватися в напрямку full stack.
         Для себе створив декілька проектів застосовуючи React, Redux, Node.js, Mongo DB.
         Також при бажанні можу продемонструвати свої проекти на співбесіді ( також ви їх можете знайти на моєму акаунті GitHub: <a href='https://github.com/Sergo-kun'>https://github.com/Sergo-kun</a>).
         </p>
       </div>
     </div>
     <hr className='hr5'/>
     <div className='education'>
     <div className='title'>
       ОСВІТА ТА РЕЛЕВАНТНИЙ ДОСВІД
     </div>
     <div className='education_text'>
     <p style={{ "margin": 0,"text-indent": "3ch"}}>
       З 2017 по 2021 навчався в Міжнародному науково-технічному университеті імені академіка Юрія Бугая на факультеті програмної інженерії де здобув осівут бакалавра.
       Брав уроки у репетитора по веб-розробці. React, Redux, Node.js вивчав самостійно.
         </p>
         </div>
     </div>
     <hr className='hr6'/>
     <div className='contacts'>
     <div className='title'>
      Контакти
     
     </div>
     <Element name='contact' className='contacts_info'>
        Email: kowalenko619@gmail.com <br/>
        GitHub: <a href='https://github.com/Sergo-kun'>https://github.com/Sergo-kun</a>
      </Element>
     </div> <hr className='hr7'/></>: 
     //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
     ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////EN
     <><div className='profile'>
     <img className='profile_img'  src={myPhoto}/>
    <div className='profile_name'>KOVALENKO
SERGEY 21 years old</div>
    <div className='position'>
    Position: Junior (Trainee) Full stack Developer
     </div>
     
    
     </div>
     <hr/>
     <div className='work_time'>
     Employment: full time.<br/>
     Work schedule: flexible schedule,
full day.
     </div>
     <hr className='hr2'/>
     <div className='hard_skill'>
       <div className='title'>HARD SKILLS</div>
      <HSkills  hardSkill={hardSkill}/>
     </div>
     <hr className='hr3'/>
     <div className='soft_skill'>
       <div className='title'>SOFT SKILLS
</div>
      <div className='soft_skill_name'>
      Responsible, honest, decent, able to
learn, not conflicted, cheerful.
      </div>
     </div>
     <hr className='hr4'/>
     <div className='about_me'>
       <div className='title'>ABOUT ME
</div>
       <div className='about_me_text'>
        <p style={{ "margin": 0,"text-indent": "3ch"}}>Beginner web developer, I want to develop
in the direction of full stack.
Has created several projects using React,
Redux, Node.js, Mongo DB.
Also, if you wish, I can demonstrate my
projects at the interview (you can also find
them on my GitHub account: <a href='https://github.com/Sergo-kun'>https://github.com/Sergo-kun</a>).
         </p>
       </div>
     </div>
     <hr className='hr5'/>
     <div className='education'>
     <div className='title'>
     EDUCATION AND RELEVANT
EXPERIENCE
     </div>
     <div className='education_text'>
     <p style={{ "margin": 0,"text-indent": "3ch"}}>
     From 2017 to 2021 has studied at the
International Scientific and Technical
University named after Academician Yuri
Bugay at the Faculty of Software Engineering,
where has received a bachelor's degree.
Also, I took lessons from a web development
tutor. React, Redux, Node.js studied
independently.
         </p>
         </div>
     </div>
     <hr className='hr6'/>
     <div className='contacts'>
     <div className='title'>
     CONTACT DETAILS
     
     </div>
     <Element name='contact' className='contacts_info'>
        Email: kowalenko619@gmail.com <br/>
        GitHub: <a href='https://github.com/Sergo-kun'>https://github.com/Sergo-kun</a>
      </Element>
     </div>
     <hr className='hr7'/>
     </>}
    
    </>
  );
}

export default Home;
