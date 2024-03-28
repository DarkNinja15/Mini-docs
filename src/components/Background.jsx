import React from 'react'

const Background = () => {
  return (
    <div className='fixed z-[2] w-full h-screen'>
        <div className="absolute navbar">
            <div className='navbar-start'></div>
            <div className="navbar-center">
                <a className="text-xl font-semibold">Documents</a>
            </div>
            <div className='navbar-end'></div>
        </div>
        <h1 className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-zinc-900 text-[13vw] leading-none tracking-tighter font-semibold select-none'>Docs</h1>
    </div>
  )
}

export default Background
