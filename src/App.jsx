import './App.css'
import Ctabutton from './components/ctabutton'
import Nav from './components/nav'
import ProjectCategories from './components/ProjectCategories'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


function App() {
  gsap.registerPlugin(useGSAP,ScrollTrigger);
  useGSAP(()=>{
    gsap.to('.hero-header', {
      scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          scrub: 0.5,
          pin: ".hero-header"
      },
      scale: 0.8,
      opacity: 0,
      
    })
  })
  return (
    <section className='relative'>
    <Nav/>
    <section className="bg-gradient-to-b from-[#f2dbc8] to-white px-6 md:px-12 min-w-full hero" id='home'>
        <img src="lefthangings.svg" className='absolute top-0 left-[-70px] md:left-0'/>
        <img src="righthangings.svg" className='absolute top-0 right-[-70px] md:md:right-0'/>

        <section className='py-3 flex flex-col items-center relative z-20'>
          <header className='mt-32 md:mt-24 flex flex-col items-center hero-header'>
            <p className='font-cormorant text-5xl  text-center leading-14 md:max-w-[70%]'>Building Your Dreams With Unmatched Quality And Absolute Trust</p>
            <p className='font-cormorant text-xl text-gray-500 text-center'>Crafting Homes with Precision, Passion, and Lasting Trust.</p>
            

            <Ctabutton prompt={"EXPLORE MORE"} where="#about"/>
          </header>
          <div className='relative overlay mt-6 z-20'>
              <img src="heromain.jpg" alt="heromain_image" className='ring ring-gray-200' />
                <div className='absolute bottom-2 left-2 md:bottom-12 md:left-12 rounded-full z-10 text-white font-cormorant md:max-w-[60%]'>
                  <div className='px-4 py-1 rounded-full bg-white inline-flex'>
                    <p className='font-cormorant text-black text-xs uppercase'>Latest Work</p>
                  </div>
                  <p className='font-bold text-xl mt-2'>Lakshmi Vilas</p>
                  <p className='text-gray-50 text-xs'>A beautifully crafted 2-BHK villa, thoughtfully designed and meticulously constructed with exceptional attention to detail, nestled in the serene outskirts of Pollachi, Tamil Nadu.</p>
                </div>
            </div>
          </section>
    </section>

    {/* Section 2 - Stats */}
    <section className='mt-12 flex items-center justify-between flex-wrap-reverse px-6 md:px-12 gap-y-12 bg-white z-20 relative' id='about'>
      <div className='md:max-w-[50%]'>
        <img src="statsvec.svg" alt="" />
      </div>
      <div className='md:max-w-[50%]'>
        <p className='font-opensans font-bold text-2xl'>Your Dream, Our Commitment to Perfection</p>
        <p className='font-opensans text-gray-500 font-light'>we believe a home is more than just walls and a roof—it’s a dream, a vision, and a legacy. With an unwavering commitment to unrivaled quality and excellence, we turn aspirations into reality, crafting homes that stand the test of time.
          From the foundation to the finishing touches, every detail matters. Our team of expert builders and craftsmen work with precision and passion, ensuring that each project reflects trust, durability, and superior craftsmanship.
        </p>
        <br/>
        <p className='font-opensans text-gray-500 tracking-tight'>Whether you're building your first home or creating a timeless sanctuary, we are here to bring your vision to life with quality you can trust. Because at Arul Bakavathi, we don’t just construct buildings—we create homes that inspire.</p>
        <div className='flex gap-x-2 flex-wrap'>
          <Ctabutton prompt="Book a consult" where="#contact"/>
          <Ctabutton prompt="View Projects" onlyBorder={true} where="/projects"/>
        </div>
      </div>
    </section>

    {/* Section 3 - Excellency */}
    <section className='flex items-center justify-between md:px-12 px-6 flex-wrap-reverse gap-y-12'>
      <div className='md:max-w-[50%] flex flex-col justify-center gap-12'>
        <div>
        <p className='font-cormorant text-gray-400 text-xl md:text-3xl'>Why Us?</p>
          <p className='font-cormorant text-5xl md:text-7xl uppercase text-gray-400'>Excellency</p>
        </div>
        <div className=''>
          <p className='font-opensans font-bold text-xl'>Premium Quality Products</p>
          <p className='text-gray-500 font-opensans'>Top-tier materials, superior craftsmanship, and unmatched durability ensure your home is built to last, meeting the highest industry standards.</p>
        </div>
        <div>
          <p className='font-opensans font-bold text-xl'>Timely Completion</p>
          <p className='text-gray-500 font-opensans'>Efficient planning, timely execution, and commitment to deadlines guarantee your project is completed on schedule without compromise</p>
        </div>
        <div>
          <p className='font-opensans font-bold text-xl'>Expert Craftsmanship</p>
          <p className='text-gray-500 font-opensans'>Skilled artisans and attention to detail ensure flawless finishes and structural integrity in every project</p>
        </div>
      </div>
      <div className='md:max-w-[50%]'>
        <img src="excimg.png" alt="excellency_image" />
      </div>
    </section>

    {/* Section 4 - Images */}
    <div id='gallery'>
      <ProjectCategories/>
    </div>
    <div className='px-6 flex justify-center items-center'>
      <Ctabutton prompt="EXPLORE OUR PROJECTS" className="mt-6" where="/projects"/>
    </div>

    {/* Section 5 - Contact */}
    <section className='mt-12 px-6 md:px-12 bg-gradient-to-t from-[#f2dbc8] to-white w-full relative' id='contact'>
      <div>
        <p className='uppercase font-cormorant text-7xl text-gray-500'>Connect</p>
        <p className='font-cormorant uppercase md:max-w-[70%] text-sm'>We believe strong communication leads to remarkable achievements.</p>
      </div>
      <div className='grid md:grid-cols-2 grid-cols-1 gap-4 mt-6 z-20 relative'>
        <input type="text" className='border outline-none font-serif px-6 py-2 border-black rounded-full placeholder:font-cormorant placeholder:text-black w-full' placeholder='Name'/>
        <input type="text" className='border outline-none font-serif px-6 py-2 border-black rounded-full placeholder:font-cormorant placeholder:text-black w-full' placeholder='Phone Number'/>
        <textarea type="text" className='border outline-none font-serif px-6 py-2 border-black rounded-full placeholder:font-cormorant placeholder:text-black w-full col-span-full' placeholder='Your Comment'/>
      </div>
      <Ctabutton prompt="Book a Consult" className="z-40 relative" where="#contact"/>
      <div className='w-full h-[.2px] bg-black opacity-15 mt-12'></div>
      {/* Footer Section */}
      <footer className='mt-12 pb-12 flex-wrap gap-6'>
        <div>
          <img src="logo.svg" alt="" className='max-w-[150px]'/>
          <p className='font-cormorant text-gray-500'>Crafting Homes with Precision, Passion, and Lasting Trust.</p>
        </div>
        <div className='flex justify-between items-center flex-wrap gap-y-6  mt-6'>
          <div>
            <p className='font-cormorant'>Follow Our Socials</p>
            <div className='flex gap-4'>
              <img src="linkedin.svg" alt="" />
              <img src="youtube.svg" alt="" />
              <img src="facebook.svg" alt="" />
              <img src="instagram.svg" alt="" />
            </div>
          </div>
          <div className='font-cormorant font-medium text-left md:text-right'>
            <p>arullbakavathi@gmail.com</p>
            <p>64, Sri Annai Complex, Katchery Street,<br/> Udumalpet - 642126</p>
            <p>+91 94892 74593</p>
          </div>
        </div>
      </footer>
      {/* <img src="lefthangings.svg" className='absolute bottom-0 left-0 rotate-180'/>
      <img src="righthangings.svg" className='absolute bottom-0 right-0 rotate-180'/> */}
    </section>
    </section>
  )
}

export default App
