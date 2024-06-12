import React,{useEffect, useRef,useState} from 'react'

import Typed from 'typed.js';
import { FaFacebookF,FaArrowUp ,FaReact , FaUserGraduate,FaAmazon,FaUniversity   } from "react-icons/fa";
import { IoLogoJavascript,IoMdClose } from "react-icons/io";
import { FaLinkedinIn,FaSass } from "react-icons/fa6";
import { CgDebug } from "react-icons/cg";
import { CiInstagram } from "react-icons/ci";
import { TiHtml5 } from "react-icons/ti";
import { TbBrandCss3,TbApi  } from "react-icons/tb";
import { ImMenu } from "react-icons/im";
import { IoCheckmarkCircleOutline,IoLogoGithub  } from "react-icons/io5";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Link} from 'react-scroll';
import { NavLink, Link as LinkRouter} from 'react-router-dom';

import { BiLogoTailwindCss ,BiLogoBootstrap} from "react-icons/bi";
function Home() {
    const [open,setOpen]=useState(false)
    const pathName=window.location.pathname;
    const pageName=pathName.split('/').pop();
    const el =useRef(null)
    useEffect(()=>{
        document.title='home'
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
    const handlemenu=()=>{
        setOpen(!open)
       
    }

    const handleSetActive = (to) => {
      console.log(to);
    };

  
    
  return (
    <div className='home min-h-screen overflow-hidden'>
      <nav className='flex md:items-center justify-between w-full h-screen md:h-[100px] gap-[30px] fixed z-[300] w-full top-0 left-0  md:bg-transparent md:px-20 md:py-10 '>
        <div className='hidden md:flex  justify-between w-full'>
        <div className='flex justify-between '>
          
          <Link  to='home' className=' text-base md:text-[25px]  md:text-white font-bold curser-pointer 
             h-[20px] logo p-2 md:pt-0 mb-0 ' > Portfolio
       
          </Link>
          
        </div>
        <div className={` duration-500 hidden  md:block  p-2`}>
        <ul className='navbar-items hidden md:flex  md:flex-row  md:items-center 
           md:pb-0 pb-12    md:pl-0 pl-9  '>
            <li> < Link to='/' smooth={true} offset={50}  duration={500} activeClass="active" spy={true}
            className=" inline-block  lg:text-[18px] text-base text-black md:text-white font-semibold ml-[35px] transition duration-150 hover:text-[#0ef] active:text-[#0ef] menu-item  "> Home </ Link>
            
               </li>
               <li> < Link to='education' smooth={true} offset={50}  duration={500} activeClass="active" spy={true}
                className=" inline-block lg:text-[18px] text-base text-black md:text-white font-semibold ml-[20px] lg:ml-[35px] transition duration-150 hover:text-[#0ef] active:text-[#0ef] menu-item  "> Education </ Link>
            
               </li>
               <li> < Link to='work' smooth={true} offset={50}  duration={500} activeClass="active" spy={true}
                className=" inline-block lg:text-[18px] text-base text-black md:text-white font-semibold ml-[20px] lg:ml-[35px] transition duration-150 hover:text-[#0ef] active:text-[#0ef] menu-item  "> Work </ Link>
            
               </li>
               <li> < Link to='skills' smooth={true} offset={50}  duration={500} activeClass="active" spy={true}
                className=" inline-block lg:text-[18px] text-base text-black md:text-white font-semibold ml-[20px] lg:ml-[35px] transition duration-150 hover:text-[#0ef] active:text-[#0ef] menu-item  "> Skills </ Link>
            
               </li>
               <li> < Link to='project' smooth={true} offset={50}  duration={500} activeClass="active" spy={true}
                className=" inline-block lg:text-[18px] text-base text-black md:text-white font-semibold ml-[20px] lg:ml-[35px] transition duration-150 hover:text-[#0ef] active:text-[#0ef] menu-item  "> Project </ Link>
            
               </li>
               <li> < Link to='contact' smooth={true} offset={50}  duration={500} activeClass="active" spy={true}
                className=" inline-block lg:text-[18px] text-base text-black md:text-white font-semibold ml-[20px] lg:ml-[35px] transition duration-150 hover:text-[#0ef] active:text-[#0ef] menu-item  "> Contact </ Link>
            
               </li>
           
      
            

        </ul>

        </div>
        </div>
         {/*mobile menu*/}
       <div className='w-full md:hidden mt-0 p-0'> 
       <div className='flex items-center justify-between pt-2 bg-[#0ef] z-[150] w-full'>
       < Link to='/' 
            className="  text-base text-black font-semibold ml-[35px] p-2   ">Portfolio </ Link>
            
             
        <div className="flex   md:hidden p-2 " onClick={handlemenu}>
            {
                open?(<IoMdClose className='md:hidden text-black text-2xl '/>): (<ImMenu className='md:hidden text-black text-2xl '/>)
            }
         </div>
       </div>
       {
            open?( 
            <ul className=' flex flex-col md:hidden items-start justify-start pt-2 h-screen  mt-0 space-y-5   bg-white min-w-full cursor-pointer  '>
                
                <li> < Link to='/' smooth={true} offset={50}  duration={500} activeClass="active" spy={true}
            className=" inline-block md:text-[18px] text-base text-black md:text-white font-semibold ml-[35px] transition duration-150 hover:text-[#0ef] active:text-[#0ef] menu-item  " onClick={handlemenu}> Home </ Link>
            
               </li>
               <li> < Link to='education' smooth={true} offset={50}  duration={500} activeClass="active" spy={true}
                className=" inline-block md:text-[18px] text-base text-black md:text-white font-semibold ml-[35px] transition duration-150 hover:text-[#0ef] active:text-[#0ef] menu-item  " onClick={handlemenu}> Education </ Link>
            
               </li>
               <li> < Link to='work' smooth={true} offset={50}  duration={500} activeClass="active" spy={true}
                className=" inline-block md:text-[18px] text-base text-black md:text-white font-semibold ml-[35px] transition duration-150 hover:text-[#0ef] active:text-[#0ef] menu-item  " onClick={handlemenu}> Work </ Link>
            
               </li>
               <li> < Link to='skills' smooth={true} offset={50}  duration={500} activeClass="active" spy={true}
                className=" inline-block md:text-[18px] text-base text-black md:text-white font-semibold ml-[35px] transition duration-150 hover:text-[#0ef] active:text-[#0ef] menu-item  " onClick={handlemenu}> Skills </ Link>
            
               </li>
               <li> < Link to='project' smooth={true} offset={50}  duration={500} activeClass="active" spy={true}
                className=" inline-block md:text-[18px] text-base text-black md:text-white font-semibold ml-[35px] transition duration-150 hover:text-[#0ef] active:text-[#0ef] menu-item  " onClick={handlemenu}> Project </ Link>
            
               </li>
               <li> < Link to='contact' smooth={true} offset={50}  duration={500} activeClass="active" spy={true}
                className=" inline-block md:text-[18px] text-base text-black md:text-white font-semibold ml-[35px] transition duration-150 hover:text-[#0ef] active:text-[#0ef] menu-item  " onClick={handlemenu}> Contact </ Link>
            
               </li>
           
 
         </ul>):(null)
         }
       </div>
      </nav>
      <section className='home flex md:grid md:grid-cols-2 gap-[30px] lg:flex flex-col-reverse md:h-[500px] lg:h-[600px] h-full lg:flex-row items-start justify-between gap-10 pt-20 md:pt-[70px] lg:pt-[100px] md:px-[5%] pb-0' id='/'>
        <div className="home-content max-w-[600px] ">
            <h3 className=' text-[32px] font-bold  text-white text-start'> I'm </h3>
            <h1 className=' text-white text-[30px] md:text-[30px] lg:text-[56px] font-bold ml-0 mr-0 my-[-3px] text-start'>Augustine Cudjoe</h1>
            <h3 className='text-[20px] lg:text-[32px] font-bold text-white mb-[20px] text-start' > And I'm a <span className='text-[#0ef] md:text-[20px] lg:text-[32px]' ref={el}> </span>  
             
           </h3>
            <p className=' text-white text-[16px] text-start'>Focused on creating beautiful and user friendly web applications</p>
          <div className="social-media flex items-center md:justify-start justify-center  ">
             <LinkRouter className='inline-flex items-center justify-center my-[30px] mr-[15px] ml-[0px] w-[40px] transition-all h-[40px] bg-transparent  border-2 border-[#0ef] rounded-full text-[#0ef] text-[20px] hover:bg-white hover:text-[#0ef] hover:shadow-white hover:border-white' to='#'> <FaFacebookF /> </LinkRouter>
             <LinkRouter className='inline-flex items-center justify-center my-[30px] mr-[15px] ml-[0px] w-[40px] transition-all h-[40px] bg-transparent  border-2 border-[#0ef] rounded-full text-[#0ef] text-[20px] hover:bg-white hover:text-[#0ef] hover:shadow-white hover:border-white'    to='https://github.com/Augustine-cudjoe'> <IoLogoGithub  /></LinkRouter>
             <LinkRouter  className='inline-flex items-center justify-center my-[30px] mr-[15px] ml-[0px] w-[40px] transition-all h-[40px] bg-transparent  border-2 border-[#0ef] rounded-full text-[#0ef] text-[20px] hover:bg-white hover:text-[#0ef] hover:shadow-white hover:border-white' to='https://www.linkedin.com/in/augustine-cudjoe/'> <FaLinkedinIn/> </LinkRouter>
             <LinkRouter  className='inline-flex items-center justify-center my-[30px] mr-[15px] ml-[0px] w-[40px] transition-all h-[40px] bg-transparent  border-2 border-[#0ef] rounded-full text-[#0ef] text-[20px]  hover:bg-white hover:text-[#0ef] hover:shadow-white hover:border-white' to='#'> <CiInstagram/> </LinkRouter>
          </div>
            <div className="flex flex-col md:flex-row justify-center md:justify-start gap-5 " id='bottom'>
            <LinkRouter  to='#' className='  w-full md:w-[200px] h-[50px] py-[17px] px-[15px] lg:px-[28px] bg-[#0ef] rounded-lg shadow-lg shadow-[#0ef] text-[#1f242d] leading-[10px] text-[16px] font-medium  hover:bg-white hover:text-[#0ef] hover:shadow-white'>Download CV</LinkRouter>
            <LinkRouter  to='#' className=' w-full md:w-[200px] h-[50px] py-[17px] px-[15px] lg:px-[28px] bg-[#0ef] rounded-lg shadow-lg shadow-[#0ef] text-[#1f242d] leading-[10px] text-[16px] font-medium hover:bg-white hover:text-[#0ef] hover:shadow-white'>Hire Me </LinkRouter>
       
            </div>
        </div>
        <div className="home-img ">
            <img className=' shadow-lg shadow-[#0ef] bg-[#0ef] md:max-w-[450px] w-full  ' src='https://avatars.githubusercontent.com/u/108471678?s=400&u=5456be30af1ed09e1cfdcd927951f3312af07378&v=4'/>
        </div>

      </section> 
      <section className='education py-[50px] w-full h-sreen px-[5%] ' id='education'>
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
      <section className='work py-[50px] w-full h-sreen px-[5%]  ' id='work'>
             <h2  className='text-[24px] font-extrabold text-white py-[30px]'>Work Experience</h2>
             <VerticalTimeline layout='2-columns'>
           <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#0ef', color: '#fff' }}
    
    contentArrowStyle={{ borderRight: '7px solid  #0ef' }}
    date="Oct 2021- Sept 2022"
    iconStyle={{ background: '#0ef', color: '#fff' }}
    icon={<FaAmazon/>}
  >
    <h3 className="vertical-timeline-element-title text-xl font-extrabold md:text-3xl">Amazon, Poland</h3>
    <h4 className="vertical-timeline-element-subtitle my-3 text-lg md:text-2xl">Senior Compliance Associate</h4>
    <ul className='space-y-3'>
        <li className='text-base text-start flex md:items-center items-start gap-2'> <IoCheckmarkCircleOutline className=' w-[1em] h-[1em] text-sm  md:text-lg shrink-0 '/> Responded to product compliance issues .</li>
        <li className='text-base text-start flex md:items-center items-start gap-2 '> <IoCheckmarkCircleOutline className=' w-[1em] h-[1em] text-sm  md:text-lg shrink-0 '/> Classified products based on SOP.</li>
        <li className='text-base text-start flex md:items-center items-start gap-2 '>  <IoCheckmarkCircleOutline className=' w-[1em] h-[1em] text-sm  md:text-lg shrink-0 '/>Followed SOP and instructions provided by managers.</li>
        <li className='text-base text-start flex md:items-center items-start gap-2 '> <IoCheckmarkCircleOutline className=' w-[1em] h-[1em] text-sm  md:text-lg shrink-0 '/> Demonstrated attention to detail.</li>
    </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#0ef', color: '#fff' }}
    
    contentArrowStyle={{ borderRight: '7px solid  #0ef' }}
    date="Oct 2021- Sept 2022"
    iconStyle={{ background: '#0ef', color: '#fff' }}
    icon={<FaUniversity />}
  >
    <h3 className="vertical-timeline-element-title text-xl font-extrabold md:text-3xl"> University of Energy and Natural Resources, Ghana</h3>
    <h4 className="vertical-timeline-element-subtitle my-3 text-lg md:text-2xl">Teaching and Research Assistant</h4>
    <ul className='space-y-3'>
        <li className=' text-start flex items-start gap-2'> <IoCheckmarkCircleOutline className='w-[1em] w-[1em] text-sm  md:text-lg shrink-0 '/>  <span className='text-base'> I  assisted in assessment creation and administration.</span></li>
        <li className=' text-start flex items-start gap-2 '> <IoCheckmarkCircleOutline className='w-[1em] w-[1em] text-sm  md:text-lg shrink-0 '/> <span className='text-base'> I organized tutorials for students.</span></li>
         <li className=' text-start flex items-start gap-2 '> <IoCheckmarkCircleOutline className='w-[1em] w-[1em] text-sm  md:text-lg shrink-0 '/> <span className='text-base'> I collaborated with professors in research activities.</span></li>
    </ul>
          </VerticalTimelineElement>
         </VerticalTimeline>
      </section>
      <section className='skills py-[50px] w-full h-sreen px-[5%]'  id='skills'>
            <h2 className='text-[24px] font-extrabold text-white py-[30px]'>My skills</h2>
            <div className="grid  grid-cols-2 md:grid-cols-4 items-center gap-10 md:gap-5">
                <div className="skills-content w-full md:mb-3 mb-7">
                    <div className="border border-[#0ef] hover:border-white  hover:bg-[#0ef] w-[100px] mx-auto rounded-full mb-5">
                        <TiHtml5 className='mx-auto  text-[#0ef] hover:text-white  ' size={100}/>
                    </div>
                    <div className='flex flex-col space-y-3'>
                        <h4 className='text-white font-semibold text-2xl'>HTML5</h4>
                       
                    </div>
                </div>
                <div className="skills-content w-full md:mb-3 mb-7">
                    <div className="icons-holder border border-[#0ef] hover:border-white  hover:bg-[#0ef] w-[100px] mx-auto rounded-full mb-5">
                        < IoLogoJavascript className='mx-auto  text-[#0ef]  hover:text-white ' size={90}/>
                    </div>
                    <div className='flex flex-col space-y-3'>
                        <h4 className='text-white font-semibold text-2xl'>Javascript</h4>
                      
                    </div>
                </div>
                <div className="skills-content w-full md:mb-3 mb-7">
                <div className="border border-[#0ef] hover:border-white  hover:bg-[#0ef] w-[100px] mx-auto rounded-full mb-5">
                        <TbBrandCss3 className='mx-auto  text-[#0ef] hover:text-white  ' size={100}/>
                    </div>
                    <div className='flex flex-col space-y-3'>
                        <h4 className='text-white font-semibold text-2xl'>CSS3</h4>
                       
                    </div>
                </div>
                <div className="skills-content w-full md:mb-3 mb-7">
                    <div className="border border-[#0ef] hover:border-white  hover:bg-[#0ef] w-[100px] mx-auto rounded-full mb-5">
                        <FaReact   className='mx-auto  text-[#0ef] hover:text-white rounded-full  ' size={90}/>
                    </div>
                    <div className='flex flex-col space-y-3'>
                        <h4 className='text-white font-semibold text-2xl'>React Js</h4>
                       
                    </div>
                </div>
                <div className="skills-content w-full md:mb-3 mb-7">
                    <div className="icons-holder border border-[#0ef] hover:border-white  hover:bg-[#0ef] w-[100px] mx-auto rounded-full mb-5">
                        < BiLogoBootstrap className='mx-auto  text-[#0ef] hover:text-white ' size={100}/>
                    </div>
                    <div className='flex flex-col space-y-3'>
                        <h4 className='text-white font-semibold text-2xl'>Bootstrap</h4>
                      
                    </div>
                </div>
                <div className="skills-content w-full md:mb-3 mb-7">
                <div className="border border-[#0ef] hover:border-white  hover:bg-[#0ef] w-[100px] mx-auto rounded-full mb-5">
                        <BiLogoTailwindCss className='mx-auto  text-[#0ef] hover:text-white  ' size={100}/>
                    </div>
                    <div className='flex flex-col space-y-3'>
                        <h4 className='text-white font-semibold text-2xl'>Tailwind css</h4>
                      
                    </div>
                </div>
                <div className="skills-content w-full md:mb-3 mb-7">
                <div className="border border-[#0ef] hover:border-white  hover:bg-[#0ef] w-[100px] mx-auto rounded-full mb-5">
                        <TbApi  className='mx-auto  text-[#0ef] hover:text-white  ' size={100}/>
                    </div>
                    <div className='flex flex-col space-y-3'>
                        <h4 className='text-white font-semibold text-2xl'>API</h4>
                      
                    </div>
                </div>
                <div className="skills-content w-full md:mb-3 mb-7">
                <div className="border border-[#0ef] hover:border-white  hover:bg-[#0ef] w-[100px] mx-auto rounded-full mb-5">
                        <CgDebug  className='mx-auto  text-[#0ef] hover:text-white  ' size={100}/>
                    </div>
                    <div className='flex flex-col space-y-3'>
                        <h4 className='text-white font-semibold text-2xl'>Debugging</h4>
                      
                    </div>
                </div>
                <div className="skills-content w-full md:mb-3 mb-7">
                <div className="border border-[#0ef] hover:border-white  hover:bg-[#0ef] w-[100px] mx-auto rounded-full mb-5">
                        <FaSass  className='mx-auto  text-[#0ef] hover:text-white p-2 ' size={100}/>
                    </div>
                    <div className='flex flex-col space-y-3'>
                        <h4 className='text-white font-semibold text-2xl'>Sass</h4>
                      
                    </div>
                </div>
            </div>
      </section>
       <section className='project  py-[50px] w-full h-sreen px-[5%]' id='project'>
                <h2 className='mb-[4rem] text-[24px] text-white font-bold'> Latest <span>Projects</span></h2>
                <div className="project-holder  grid grid-cols-1 md:grid-cols-3 items-center gap-5">
                <LinkRouter to='https://ctl-africa.vercel.app/'>
                <div className="project-content flex flex-col  w-full md:w-[350px] h-[450px] md:h-[410px] lg:h-[450px] rounded-md  border-radius-md shadow-lg shadow-[#0ef] flex   overflow-hidden ">
                  <img className='w-full  h-[180px] md:h-[150px] lg:h-[200px] ' src='https://i.im.ge/2024/06/09/KCH8uq.Screenshot-2024-06-09-at-13-45-51.png' alt='....'/>
                  <div className="projects-cont flex flex-col  items-center justify-center py-0 px-[1rem]   text-white ">
                     <h4 className='text-white text-[2em] md:text-[1.2em] lg:text-[2rem] font-medium'>CTL Africa </h4>
                     <p className='text-white  text-base md:text-sm lg:text-base   mb-[0.2rem] text-start'>Developed a responsive multiple-page website using HTML, CSS, Tailwind CSS, React-Router and React JS.
                      </p>
                  </div>
                     <div className="flex justify-center pt-2">
                     <p className='  w-[200px] md:w-[80%] lg: w-[200px] h-[50px] py-[17px] px-[28px] bg-[#0ef] rounded-lg shadow-lg shadow-[#0ef] text-[#1f242d] leading-[10px] text-[16px] font-medium hover:bg-white hover:text-[#0ef] hover:shadow-white hover:border-white '>See Me !</p>
       
                     </div>
                </div>
                </LinkRouter>
                  <LinkRouter to='https://elearning-web-coral.vercel.app/'>
                  <div className="project-content flex flex-col  w-full md:w-[350px] h-[450px] md:h-[410px] lg:h-[450px] rounded-md  border-radius-md shadow-lg shadow-[#0ef] flex   overflow-hidden ">
                  <img className='w-full   h-[180px] md:h-[150px] lg:h-[200px] ' src='https://i.im.ge/2024/06/09/KCpQxJ.Screenshot-2024-06-09-at-14-51-32.png' alt='....'/>
                  <div className="projects-cont flex flex-col  items-center justify-center py-0 px-[1rem]   text-white ">
                     <h4 className='text-white text-[2em] md:text-[1.2em] lg:text-[2rem] font-medium'> E-Learning  </h4>
                     <p className='text-white  text-base md:text-sm lg:text-base   mb-[0.2rem] text-start'>Developed a responsive and user-friendly e-learning website built with HTML, Bootstrap, CSS, and React JS.
                     </p>
                      
                  </div>
                  <div className="flex justify-center pt-2">
                     <p className='  w-[200px] md:w-[80%] lg: w-[200px] h-[50px] py-[17px] px-[28px] bg-[#0ef] rounded-lg shadow-lg shadow-[#0ef] text-[#1f242d] leading-[10px] text-[16px] font-medium  hover:bg-white hover:text-[#0ef] hover:shadow-white hover:border-white'>See Me !</p>
       
                     </div>
                </div>
                  </LinkRouter>
                  <LinkRouter to='https://responsive-landing-page-six.vercel.app/'>
                  <div className="project-content flex flex-col  w-full md:w-[350px] h-[450px] md:h-[410px] lg:h-[450px] rounded-md  border-radius-md shadow-lg shadow-[#0ef] flex   overflow-hidden ">
                  <img className='w-full   h-[180px] md:h-[150px] lg:h-[200px]' src='https://i.im.ge/2024/06/09/KCpO9K.Screenshot-2024-06-09-at-14-55-19.png' alt='....'/>
                  <div className="projects-cont flex flex-col  items-center justify-center py-0 px-[1rem]   text-white ">
                     <h4 className='text-white text-[2em] md:text-[1.2em] lg:text-[2rem] font-medium'>Landing Page </h4>
                     <p className='text-white  text-base md:text-sm lg:text-base   mb-[0.2rem] text-start'> Created a landing page built with HTML, Tailwind CSS, CSS, and React JS.
                    
                      </p>
                      
                  </div>
                  <div className="flex justify-center pt-2">
                     <p className=' w-[200px] md:w-[80%] lg: w-[200px]h-[50px] py-[17px] px-[28px] bg-[#0ef] rounded-lg shadow-lg shadow-[#0ef] text-[#1f242d] leading-[10px] text-[16px] font-medium  hover:bg-white hover:text-[#0ef] hover:shadow-white hover:border-white'>See Me !</p>
       
                     </div>
                </div>
                  </LinkRouter>
                 <LinkRouter to='https://react-ui-gi6a-jr6c7mnqu-augustine-cudjoes-projects.vercel.app/'>
                 <div className="project-content flex flex-col  w-full md:w-[350px] h-[450px] md:h-[410px] lg:h-[450px] rounded-md  border-radius-md shadow-lg shadow-[#0ef] flex   overflow-hidden ">
                  <img className='w-full   h-[180px] md:h-[150px] lg:h-[200px] ' src='https://i.im.ge/2024/06/09/KCnAj4.Screenshot-2024-06-09-at-16-21-13.png' alt='....'/>
                  <div className="projects-cont flex flex-col  items-center justify-center py-0 px-[1rem]   text-white ">
                     <h4 className='text-white text-[2em] md:text-[1.2em] lg:text-[2rem] font-medium '> CRUD APP</h4>
                     <p className='text-white  text-base md:text-sm lg:text-base   mb-[0.2rem] text-start'> Implemented a React JS CRUD app for booking appointments. It allows users to book an appointment, edit, and delete using HTML, Bootstrap, React JS, JSON Server, and Axios.</p>
                      
                  </div>
                  <div className="flex justify-center pt-2">
                     <p className='  w-[200px] md:w-[80%] lg: w-[200px] h-[50px] py-[17px] px-[28px] bg-[#0ef] rounded-lg shadow-lg shadow-[#0ef] text-[#1f242d] leading-[10px] text-[16px] font-medium hover:bg-white hover:text-[#0ef] hover:shadow-white hover:border-white'>See Me !</p>
       
                     </div>
                </div>
                 </LinkRouter>
                 <LinkRouter to='https://hositadash-ffko-kf2crzlwr-augustine-cudjoes-projects.vercel.app/'>
                 <div className="project-content flex flex-col  w-full md:w-[350px] h-[450px] md:h-[410px] lg:h-[450px] rounded-md  border-radius-md shadow-lg shadow-[#0ef] flex   overflow-hidden ">
                  <img className='w-full   h-[180px] md:h-[150px] lg:h-[200px] ' src='https://i.im.ge/2024/06/09/KCJiI1.Screenshot-2024-06-09-at-15-47-58.png' alt='....'/>
                  <div className="projects-cont flex flex-col  items-center justify-center py-0 px-[1rem]   text-white ">
                     <h4 className='text-white text-[2em] md:text-[1.2em] lg:text-[2rem] font-medium'> Dashboad </h4>
                     <p className='text-white  text-base md:text-sm lg:text-base   mb-[0.2rem] text-start'>Built a responsive dashboard for the school management system using HTML, CSS,Tailwind CSS, and ReactJS.
                     
                     </p>
                      
                  </div>
                  <div className="flex justify-center pt-2">
                     <p className='  w-[200px] md:w-[80%] lg: w-[200px] h-[50px] py-[17px] px-[28px] bg-[#0ef] rounded-lg shadow-lg shadow-[#0ef] text-[#1f242d] leading-[10px] text-[16px] font-medium  hover:bg-white hover:text-[#0ef] hover:shadow-white hover:border-white'>See Me !</p>
       
                     </div>
                </div>
                 </LinkRouter>
               
                 <LinkRouter to='https://mern-stack-blog-blue.vercel.app/'>
                 <div className="project-content flex flex-col  w-full md:w-[350px] h-[450px] md:h-[410px] lg:h-[450px] rounded-md  border-radius-md shadow-lg shadow-[#0ef] flex   overflow-hidden ">
                  <img className='w-full   h-[180px] md:h-[150px] lg:h-[200px] ' src='https://i.im.ge/2024/06/09/KC4c0F.Screenshot-2024-06-09-at-16-47-00.png' alt='....'/>
                  <div className="projects-cont flex flex-col  items-center justify-center py-0 px-[1rem]   text-white ">
                     <h4 className='text-white text-[2em] md:text-[1.5em] lg:text-[2rem]'> Blog </h4>
                     <p className='text-white text-base md:text-sm lg:text-base   mb-[0.2rem] text-start'>
                     Implemented a responsive blog page allowing users to post, create, update, and delete a post. Built with HTML, Tailwind CSS, JSON-server, Api, Axios, and ReactJS
                      </p>
                      
                  </div>
                  <div className="flex justify-center pt-2">
                     <p className=' w-[200px] md:w-[80%] lg: w-[200px]  h-[50px] py-[17px] px-[28px] bg-[#0ef] rounded-lg shadow-lg shadow-[#0ef] text-[#1f242d] leading-[10px] text-[16px] font-medium  hover:bg-white hover:text-[#0ef] hover:shadow-white hover:border-white'>See Me !</p>
       
                     </div>
                </div>
                 </LinkRouter>
                </div>
       </section>
      <section className=' contact px-[5%] py-[50px] md:min-w-full  min-w-screen z-0'  id='contact'>
          <h2 className=' mb-[3rem] text-[25px] font-bold text-white'> Contact  <span> Me</span> </h2>
           <form className='items-center mb-[3rem] mt-[1rem] mx-auto max-w-[70rem]'>
            <div className=' flex flex-col md:flex-row justify-center items-center gap-5 mb-5 '>
                <input type='text' placeholder='Full Name'  className='w-full md:w-[310px] h-[50px] text-[1.6rem] p-[1.5rem] border-radius-md mx-0 my[0.7rem] border border-black outline-none hover:border-[#0ef]'/>
                <input type='email' placeholder='Email Address' className='w-full md:w-[310px] h-[50px] text-[1.6rem] p-[1.5rem] border-radius-md mx-0 my[0.7rem] border border-black outline-none hover:border-[#0ef]' />
                    
            </div>
            <div className=' flex flex-col md:flex-row justify-center items-center gap-5 mb-5'>
                <input type='number' placeholder='Mobile Number ' className='w-full md:w-[310px] h-[50px] text-[1.6rem] p-[1.5rem] border-radius-md mx-0 my[0.7rem] border border-black outline-none hover:border-[#0ef]'/>
                <input type='text' placeholder='Email Subject' className='w-full md:w-[310px] h-[50px] text-[1.6rem] p-[1.5rem] border-radius-md mx-0 my[0.7rem] border border-black outline-none hover:border-[#0ef]' />
                    
            </div>
            <div className=' mx-auto' >
            <textarea rows={5} cols={10} placeholder='Send Me Message'  className=' w-full md:w-[640px]  text-[1.6rem] p-[1.5rem] border-radius-md mx-0 my[0.7rem] border border-black outline-none hover:border-[#0ef] shadow-md shadow-white'/>
            
            </div>
            <div className='flex justify-center'>
            <button className=' w-[200px] h-[50px] py-[17px] px-[28px] mt-5 bg-[#0ef] rounded-lg shadow-lg shadow-[#0ef] text-[#1f242d] leading-[10px] text-[16px] font-medium  cursor-pointer hover:bg-white hover:text-[#0ef] hover:shadow-white '> Send</button>
         
            </div>
           </form>
      </section>
     
      <footer className="main-footer text-bg-dark py-5 small  border-t border-white">
 <div className="container">
     <div className="grid grid-cols-1 md:items-start md:grid-cols-4 md:gap-10 lg:gap-5 space-y-3">
        <div className="">
        <h6 className='font-bold text-lg text-white text-start'>Address </h6>
           
            <address className="text-white text-lg text-start">
               ul studencka 15 <br/>
                Ligota Akademicki  <br/>
                 Katowice,Poland
            </address>
           
           </div>
           <div className=" flex items-start flex-col">
            <h6 className='font-bold text-lg text-white text-start'>Main Menu</h6>
            <ul className="text-start">
              <li className="  no-underline text-white text-lg ">
                <Link to="/" className="text-white  no-underline text-white text-lg ">Home</Link>
              </li>  
               
              <li className="  no-underline text-white text-lg ">
                <Link to="courses" className="text-white  no-underline text-white text-lg ">Education</Link>
              </li>  
              <li className=" ">
                <Link to="skills" className="text-white  no-underline text-white text-lg ">Skills</Link>
              </li>  
              <li className=" ">
                <Link to="projects" className="text-white  no-underline text-white text-lg ">Projects</Link>
              </li> 
              <li className=" ">
                <Link to="work" className="text-white  no-underline text-white text-lg ">Work</Link>
              </li> 
            </ul>
           </div>
           <div className=" shrink flex flex-col flex-wrap">
            <h6 className='font-bold text-lg text-white text-start'>Contacts </h6>
            <ul className="flex flex-col items-start flex-col flex-wrap shrink-0">
              <li className="no-underline text-white">
               +393272077379
              </li>  
              <li className="no-underline text-white">
                +48511985785
               </li>  
               <li className="no-underline text-white flex flex-wrap shrink-0">
               auguscudjoe94@gmail.com
               </li> 
            </ul>
           </div>
        <div className="">
         
        <p className='flex justify-between flex-col space-y-3  md:flex-wrap lg:flex-nowrap'>
         <LinkRouter to="#" className="flex items-center px-2 justify-start md:justify-center gap-1 md:gap-2 my-1 lg:my-0 lg:mr-[15px] md:ml-[20px] md:ml-[0px] w-full md:w-[120px] transition-all h-[40px] bg-transparent  border-2 border-[#0ef] rounded-full text-[#0ef] text-[20px] hover:bg-white hover:text-[#0ef] hover:shadow-white hover:border-white box-border ">
             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook  flex shrink-0 " viewBox="0 0 16 16">
                 <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
               </svg>

            <span className="   ">facebook</span>
         </LinkRouter>
         <LinkRouter to="#" className="flex items-center px-2 justify-start md:justify-center gap-1 md:gap-2 my-1 lg:my-0 lg:mr-[15px] md:ml-[20px] md:ml-[0px] w-full md:w-[120px] transition-all h-[40px] bg-transparent  border-2 border-[#0ef] rounded-full text-[#0ef] text-[20px] hover:bg-white hover:text-[#0ef] hover:shadow-white hover:border-white box-border">
             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter mx-1" viewBox="0 0 16 16">
                 <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
               </svg>

           <span className="d-md-block d-none">twitter</span>
         </LinkRouter>
         <LinkRouter to="#" className="flex items-center px-2 justify-start md:justify-center gap-1 md:gap-2 my-1 lg:my-0 lg:mr-[15px] md:ml-[20px] md:ml-[0px] w-full md:w-[120px] transition-all h-[40px] bg-transparent  border-2 border-[#0ef] rounded-full text-[#0ef] text-[20px] hover:bg-white hover:text-[#0ef] hover:shadow-white hover:border-white box-border">
             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-youtube me-md-2 " viewBox="0 0 16 16">
                 <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
               </svg>

           <span className="d-md-block d-none">youtube</span>
         </LinkRouter>
         
        </p>
        </div>
     </div>
 </div>
 <div className='footer flex flex-col  md:flex-row  md:justify-between items-centert py-[2rem]  px-[9%] '>
             <div className="footer-top mx-auto">
                <p className='text-lg mb-5 md:mb-0   text-white'> Copyright &copy; 2024 by @Portfolio | All Rights Reserved </p>
             </div>
             <div className="footer-social-media flex md:inline-flex items-center justify-center  rounded-md transition-all hover:shadow-">
                <Link to='home' className='  '> <FaArrowUp  className='bg-[#0ef] text-2xl text-white rounded-full animate-bounce'/> </Link>
             </div>
  </div>
</footer>
    
    </div>
  )
}

export default Home;

