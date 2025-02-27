'use client'

import { MdLightMode, MdDarkMode } from "react-icons/md"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

function DarkModeSwitch() {
    const [mounted, setMounted] = useState(false)
    const {theme, setTheme, systemTheme} = useTheme()
    const currentTheme = theme === 'system' ? systemTheme : theme

    useEffect(()=>{
        setMounted(true)
    },[])
    return (
    <div>
        {
            mounted && currentTheme === 'light' ? 
                <MdDarkMode onClick={()=>setTheme('dark')} className="text-xl cursor-pointer hover:text-amber-500"/> :  
                <MdLightMode onClick={()=>setTheme('light')} className="text-xl cursor-pointer hover:text-amber-500"/> 
        }
    </div>
  )
}

export default DarkModeSwitch