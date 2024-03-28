import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownloadCloud } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import {motion} from "framer-motion";

const Card = ({data,reference}) => {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.1}} dragElastic={0.2} dragTransition={{bounceStiffness:200,bounceDamping:10}} className='relative flex-shrink-0 w-60 h-72 rounded-[40px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden'>
      <FaRegFileAlt />
      <p className='text-xs mt-5 font-semibold leading-tight'>{data.desc}</p>
      <div className='gap-y-0 footer absolute bottom-0 w-full left-0 flex flex-col '>
        <div className='w-full flex items-center justify-between px-8 py-3 mb-3'>
            <h5>{data.fileSize}</h5>
            <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center hover:cursor-pointer'>
            {data.close?<IoClose/>:<LuDownloadCloud/>}
            </span>   
        </div>
        {data.tag.isOpen && <div className={`${data.tag.tagColor} w-full tag h-10 flex items-center justify-center`}>
          <h3 className='text-md font-semibold'>{data.tag.tagTitle}</h3>
        </div>}
        
      </div>
    </motion.div>
  )
}

export default Card
