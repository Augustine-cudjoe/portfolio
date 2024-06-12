import React,{useEffect,useRef} from 'react'
import NavComponent from '../pages/NavComponent';
import Typed from 'typed.js';
import { FaFacebookF,FaTwitter,FaArrowUp ,FaReact , FaUserGraduate  } from "react-icons/fa";
import { IoLogoJavascript,IoMdClose } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa6";
import { CiInstagram } from "react-icons/ci";
import { TiHtml5 } from "react-icons/ti";
import { TbBrandCss3 } from "react-icons/tb";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function Education() {
    const el =useRef(null)
    useEffect(()=>{
        document.title='education'
        const typed=new Typed(el.current,{
            strings:[' Frontend Developer', 'Mathematician '],
            typeSpeed:100,
            backSpeed:100,
            backDelay:1000,
            loop:true

        })
        return()=>{
            typed.destroy();
        }
    },[])
  return (
    <div className='education'>
        <NavComponent/>
         <section className='education py-[50px] w-full h-sreen px-[5%] '>
             <h2 className='text-[24px] font-extrabold text-white py-[30px]'> Education</h2>
             <div className=' flex flex-col items-center justify-center '>

            <VerticalTimeline layout='2-columns'>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#0ef', color: '#fff' }}
    
    contentArrowStyle={{ borderRight: '7px solid  #0ef' }}
    date="Oct 2021- Sept 2022"
    iconStyle={{ background: '#0ef', color: '#fff' }}
    icon={<  FaUserGraduate />}
  >
    <h3 className="vertical-timeline-element-title">University of Silesia in Katowice, Poland</h3>
    <h4 className="vertical-timeline-element-subtitle">Msc Mathematics(Modelling)</h4>
    
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#0ef', color: '#fff' }}
    
    contentArrowStyle={{ borderRight: '7px solid  #0ef' }}
    date="Oct 2020- Sept 2021"
    iconStyle={{ background: '#0ef', color: '#fff' }}
    icon={<  FaUserGraduate />}
  >
    <h3 className="vertical-timeline-element-title">University of L'Aquila, Italy</h3>
    <h4 className="vertical-timeline-element-subtitle">Msc Mathematical Engineering</h4>
    
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#0ef', color: '#fff' }}
    
    contentArrowStyle={{ borderRight: '7px solid  #0ef' }}
    date="Sept 2015- Aug 2019"
    iconStyle={{ background: '#0ef', color: '#fff' }}
    icon={<  FaUserGraduate />}
  >
    <h3 className="vertical-timeline-element-title">University of Energy and Natural Resources,Sunyani- Ghana</h3>
    <h4 className="vertical-timeline-element-subtitle">Bsc Mathematics</h4>
    
  </VerticalTimelineElement>
         </VerticalTimeline>
             </div>
      </section>
    </div>
  )
}

export default Education;