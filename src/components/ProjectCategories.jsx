import React from 'react'
import { Link,  useNavigate} from 'react-router'

const ProjectCategories = () => {
  const navigate = useNavigate()
  function moveToProjects() {
    return navigate("/projects")
  }
  return (
    <section className='grid grid-cols-1 md:grid-cols-4 w-full gap-3 mt-12 px-6 md:px-12'>
    <div className='relative overlay shadow-md group overflow-hidden cursor-pointer' onClick={()=>moveToProjects()}>
      <img src="hh1.jpg" alt="house" className='w-full h-full group-hover:scale-105 transition-all'/>
      <p className='font-cormorant absolute bottom-2 left-2 text-white z-10'>House</p>
    </div>
    <div className='relative overlay shadow-md group overflow-hidden cursor-pointer' onClick={()=>moveToProjects()}>
      <img src="hh2.jpg" alt="house" className='w-full h-full group-hover:scale-105 transition-all' />
      <p className='font-cormorant absolute bottom-2 left-2 text-white z-10'>Apartments</p>
    </div>
    <div className='relative overlay shadow-md group overflow-hidden cursor-pointer' onClick={()=>moveToProjects()}>
      <img src="hh3.jpg" alt="house" className='w-full h-full group-hover:scale-105 transition-all'/>
      <p className='font-cormorant absolute bottom-2 left-2 text-white z-10'>Government Projects</p>
    </div>
    <div className='relative overlay shadow-md group overflow-hidden cursor-pointer' onClick={()=>moveToProjects()}>
      <img src="hh4.jpg" alt="house" className='w-full h-full group-hover:scale-105 transition-all'/>
      <p className='font-cormorant absolute bottom-2 left-2 text-white z-10'>Public Sector</p>
    </div>
  </section>
  )
}

export default ProjectCategories