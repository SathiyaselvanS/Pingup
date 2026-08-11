import React from "react";
import { assets } from "../assets/assets";
import { Star } from "lucide-react";
import {SignIn} from "@clerk/react";
const Login =()=>{
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
    <img src={assets.bgImage} alt="" className="absolute top-0 left-0 -z-10 w-full
    h-full object-cover"/>
    <div>
        <div className="h-full flex flex-col items-start justify-between p-6 md:p-10 lg:pl-40">
        <img src={assets.logo} alt="" className="h-12 object-contain"/>
        <div>
            <div className="flex items-center gap-3 mb-4 max-md:mt-10">
                <img src={assets.group_users} alt="" className="h-8 md:h-10"/>
                <div>
                    <div className="flex">
                        {Array(5).fill(0).map((_, i)=>(<Star key={i}
                        className="size-4 md:size-4.5 text-transparent
                        fill-amber-500"/>))}
                    </div>
                    <p>Used by Developers</p>
                </div>
                <span className="md:h-10"></span>
            </div>
        </div>
        </div>
    </div>
    <div className="flex-1 flex items-center justify-center p-6 sm:p-10">
        <SignIn />
    </div>
    </div>
  )
}
export default Login;