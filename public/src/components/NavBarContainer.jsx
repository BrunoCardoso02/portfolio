import { LuUser } from "react-icons/lu";
import { LiaHomeSolid } from "react-icons/lia";
import { VscTools } from "react-icons/vsc";

export default function NavBarContainer(){
    return(
        <aside className="w-40 flex flex-col items-center ml-20 5xl:ml-auto">
            <nav className="mt-96 fixed">
                <ul className="px-4 py-6 border border-second-gray rounded-full flex flex-col gap-9">
                    <li><a href="/#start" ><i className="text-white hover:text-sky-500 duration-150"><LiaHomeSolid size={20}/></i></a></li>
                    <li><a href="/#about"><i className="text-white hover:text-sky-500 duration-150"><LuUser size={20}/></i></a></li>
                    <li><a href="/#skills"><i className="text-white hover:text-sky-500 duration-150"><VscTools size={20}/></i></a></li>
                </ul>
            </nav>
        </aside>
    )
}