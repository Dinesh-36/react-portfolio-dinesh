import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import logo from "../assets/kevinRushLogo.png";
const Nav = () => {
    return (
        <nav className=" mb-20 flex items-center justify-between py-6">

            <div className="flex flex-shrink-0 items-center">
                {/* <img className="mx-2 w-10 " src={logo} alt="logo" /> */}
                <span className="text-3xl border-l border-b border-slate-400 px-1">D</span>

            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl " >
                <a href="https://www.linkedin.com/in/dinesh036" target="_blank"><FaLinkedin className="hover:cursor-pointer" /></a>
                <a href="https://github.com/Dinesh-36" target="_blank"><FaGithub className="hover:cursor-pointer" /></a>
            </div>

        </nav>
    )
}

export default Nav