import { Avatar } from "./BlogCard"
import { Link } from "react-router-dom"
import { PiArticleMediumFill } from "react-icons/pi";
import { useEffect } from "react";

export const Appbar = () => {
    
    useEffect(()=>{

    })

    return <div className="border-b flex justify-between px-10 py-4">
        <Link to={'/blogs'} className="flex flex-row justify-center cursor-pointer text-3xl font-bold">
                Medium <PiArticleMediumFill />
        </Link>
        <div className="flex flex-between flex-row">
            <div>
            <Link to={`/publish`}>
                <button type="button" className="mr-4 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 ">New</button>
            </Link>
            </div>

            <div className="text-3xl"><Avatar size={"big"} name=""  /></div>
        </div>
    </div>
}

export const DashAppbar = () => {
    
    return <div className="border-b flex justify-between px-10 py-4">
        <Link to={'/blogs'} className="flex flex-row justify-center cursor-pointer text-3xl font-bold">
                Medium <PiArticleMediumFill />
        </Link>
        <div className="flex flex-between flex-row">
            <div>
            <Link to={`/signup`}>
                <button type="button" className="mr-4 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 ">Let's start</button>
            </Link>
            </div>
        </div>
    </div>
}