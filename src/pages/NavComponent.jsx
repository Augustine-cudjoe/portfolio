import React,{useState} from 'react'
import { NavLink } from "react-router-dom";
import Typed from 'typed.js';
import { FaFacebookF,FaTwitter,FaArrowUp ,FaReact , FaUserGraduate  } from "react-icons/fa";
import { IoLogoJavascript,IoMdClose } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa6";
import { CiInstagram } from "react-icons/ci";
import { TiHtml5 } from "react-icons/ti";
import { TbBrandCss3 } from "react-icons/tb";
import { ImMenu } from "react-icons/im";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

export default function NavComponent() {
    const [open,setOpen]=useState(false)
    const handlemenu=()=>{
        setOpen(!open)
        
    }

  return (
    <div className='navComponent'>
      <nav className='flex justify-between h-[50px] md:h-[100px] fixed z-[150] w-full top-0 left-0 bg-[#0ef] md:bg-transparent md:px-20 md:py-10 px-3'>
        <div className='flex justify-between w-px'>
        <Link to='home' className=' text-base md:text-[25px]  md:text-white font-bold curser-pointer 
          h-[20px] logo pt-2 md:pt-0 pb-0 ' > Portfolio</Link>
         <div className="flex absolute right-8 top-0 md:hidden pt-2 " onClick={handlemenu}>
            {
                open?(<IoMdClose className='md:hidden text-black text-2xl '/>): (<ImMenu className='md:hidden text-black text-2xl '/>)
            }
         </div>
        </div>
        <div className={` duration-500 hidden  md:block `}>
        <ul className='navbar hidden md:flex  md:flex-row  md:items-center 
           md:pb-0 pb-12    md:pl-0 pl-9  '>
            <li> < Link to='home' smooth={true} offset={50}  duration={500} 
            className=" inline-block md:text-[18px] text-base text-black md:text-white font-semibold ml-[35px] transition duration-150 hover:text-[#0ef] active:text-[#0ef] menu-item  "> Home </ Link>
            
               </li>
               <li> < Link to='education' smooth={true} offset={50}  duration={500} 
                className=" inline-block md:text-[18px] text-base text-black md:text-white font-semibold ml-[35px] transition duration-150 hover:text-[#0ef] active:text-[#0ef] menu-item  "> Education </ Link>
            
               </li>
               <li> < Link to='work' smooth={true} offset={50}  duration={500} 
                className=" inline-block md:text-[18px] text-base text-black md:text-white font-semibold ml-[35px] transition duration-150 hover:text-[#0ef] active:text-[#0ef] menu-item  "> Work </ Link>
            
               </li>
               <li> < Link to='skills' smooth={true} offset={50}  duration={500} 
                className=" inline-block md:text-[18px] text-base text-black md:text-white font-semibold ml-[35px] transition duration-150 hover:text-[#0ef] active:text-[#0ef] menu-item  "> Skills </ Link>
            
               </li>
               <li> < Link to='project' smooth={true} offset={-50}  duration={500} 
                className=" inline-block md:text-[18px] text-base text-black md:text-white font-semibold ml-[35px] transition duration-150 hover:text-[#0ef] active:text-[#0ef] menu-item  "> Project </ Link>
            
               </li>
               <li> < Link to='contact' smooth={true} offset={50}  duration={500} 
                className=" inline-block md:text-[18px] text-base text-black md:text-white font-semibold ml-[35px] transition duration-150 hover:text-[#0ef] active:text-[#0ef] menu-item  "> Contact </ Link>
            
               </li>
           
      
            

        </ul>

        </div>
         {/*mobile menu*/}
       <div className='min-w-full md:hidden'> 
       {
            open?( 
            <ul className=' flex flex-col md:hidden items-start justify-start pt-20  mt-14 space-y-5  h-screen bg-white min-w-full cursor-pointer'>
                
                <li> < Link to='/home' smooth={true} offset={50}  duration={500} 
            className=" inline-block md:text-[18px] text-base text-black md:text-white font-semibold ml-[35px] transition duration-150 hover:text-[#0ef] active:text-[#0ef] menu-item  "> Home </ Link>
            
               </li>
               <li> < Link to='/education' smooth={true} offset={50}  duration={500} 
                className=" inline-block md:text-[18px] text-base text-black md:text-white font-semibold ml-[35px] transition duration-150 hover:text-[#0ef] active:text-[#0ef] menu-item  "> Education </ Link>
            
               </li>
               <li> < Link to='work' smooth={true} offset={50}  duration={500} 
                className=" inline-block md:text-[18px] text-base text-black md:text-white font-semibold ml-[35px] transition duration-150 hover:text-[#0ef] active:text-[#0ef] menu-item  "> Work </ Link>
            
               </li>
               <li> < Link to='skills' smooth={true} offset={50}  duration={500} 
                className=" inline-block md:text-[18px] text-base text-black md:text-white font-semibold ml-[35px] transition duration-150 hover:text-[#0ef] active:text-[#0ef] menu-item  "> Skills </ Link>
            
               </li>
               <li> < Link to='project' smooth={true} offset={-50}  duration={500} 
                className=" inline-block md:text-[18px] text-base text-black md:text-white font-semibold ml-[35px] transition duration-150 hover:text-[#0ef] active:text-[#0ef] menu-item  "> Project </ Link>
            
               </li>
               <li> < Link to='contact' smooth={true} offset={50}  duration={500} 
                className=" inline-block md:text-[18px] text-base text-black md:text-white font-semibold ml-[35px] transition duration-150 hover:text-[#0ef] active:text-[#0ef] menu-item  "> Contact </ Link>
            
               </li>
           
 
         </ul>):(null)
         }
       </div>
      </nav>
    </div>
  )
}
