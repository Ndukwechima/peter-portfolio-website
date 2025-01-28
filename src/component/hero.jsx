import { FiLinkedin } from "react-icons/fi";
import { CiTwitter } from "react-icons/ci";
import { FiFacebook } from "react-icons/fi";
import Image from '../assets/Peter.jpg';

const Hero = () => {
  return (
    <div className="bg-[#10585A] p-7 w-dvw ">
      <div className="relative flex float-end h-72 bg-[#10585A] w-1/2">
        <img src={Image} alt=""
        className="inset-0 w-full h-full object-cover" />
      </div>
        <div className="bg-primary bg-[#10585A] text-white h-72 w-1/2">
            <p> < span className ="text-xl text-[#FF9807] py-4 m-4">Hi,</span> I&apos;m Peter doe,</p>
            <p className="text-xl py-4 m-4"> 
            I&apos;m a Front-end <br/> <span className="text-xl text-[#FF9807] ">Software Developer</span> </p>
            <button type="submit" className="bg-white text-[#10585A] text-xl m-4 py-4">Download my Cv</button>
        </div>
        <div className="grid grid-cols-3 w-1/5 gap-2" > 
          <span><FiLinkedin /> </span>
        <span><CiTwitter /> </span>
       <span> <FiFacebook /> </span></div>
        
    </div>
  )
}

export default Hero