import React, { useRef } from 'react'
import Card from './Card'

const Foreground = () => {
  const ref=useRef(null);
  const data=[
    {
      id:1,
      desc:"This a the first card. It has a file size of .4mb",
      fileSize:".4mb",
      close: true,
      tag:{isOpen:true,tagTitle:"Download Now",tagColor:"bg-green-600"},
    },
    {
      id:2,
      desc:"This a the first card. It has a file size of .4mb",
      fileSize:".4mb",
      close: true,
      tag:{isOpen:false,tagTitle:"Download Now",tagColor:"bg-sky-600"},
    },
    {
      id:3,
      desc:"This a the first card. It has a file size of .4mb",
      fileSize:".4mb",
      close: true,
      tag:{isOpen:true,tagTitle:"Download Now",tagColor:"bg-sky-600"},
    }
  ];
  return (
    <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5'>
        {data.map((e)=>(
          <Card key={e.id} data={e} reference={ref}/>
        ))}
    </div>
  )
}

export default Foreground
