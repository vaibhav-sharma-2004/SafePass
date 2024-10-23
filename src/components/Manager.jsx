import React from 'react'

const Manager = () => {
  return (

    <div className="absolute inset-0 -z-10 h-full w-full bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-green-400 opacity-20 blur-[100px]">

      </div>
      <div className="p-3 md:mycontainer min-h-[88.2vh]">

        <h1 className='text-4xl text font-bold text-center'>
          <span className='text-green-500'> &lt;</span>

          <span>Safe</span><span className='text-green-500'>Pass/&gt;</span>

        </h1>
        <p className='text-green-900 text-lg text-center'>Your own Password Manager</p>

        <div className="flex flex-col p-4 gap-5 items-center">
          <input placeholder='Enter website URL' type="text" className="rounded-full border border-green-600 w-full p-4 py-1" />
          <div className="flex p-3 gap-5 w-full">
            <input placeholder='Enter Username' type="text" className="rounded-full border border-green-600 w-full p-4 py-1" />
            <input placeholder='Enter Password' type="text" className="rounded-full border border-green-600 w-full p-4 py-1" />
          </div>
          <button className='flex justify-center items-center bg-green-400 w-fit border border-green-950 rounded-full px-2 hover:bg-green-500'>
            <lord-icon
              src="https://cdn.lordicon.com/sbnjyzil.json"
              trigger="hover"
              stroke="bold"
            >
            </lord-icon>
            Add Password
          </button>
        </div>

      </div>
    </div>
  )
}

export default Manager