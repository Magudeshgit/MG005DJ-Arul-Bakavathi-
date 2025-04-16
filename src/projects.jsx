import React, { use, useState } from 'react'
import Nav from './components/nav'
import ProjectCategories from './components/ProjectCategories'



const Projects = () => {
    const [category_state, setcategory_state] = useState({category: "House"})
    const [popup, setpopup] = useState({
        open: false,
        name: "",
        description: "",
        date: "",

    })

    const images = [
        {category: "House", source: "h1.jpg", name: "Lakshmi Vilas", tags: ['2BHK', 'Granite Tiled', 'TerraKota Tiles'], description: "This majestic home is a living tribute to South Indian craftsmanship — from its soaring teakwood pillars and intricately carved Athangudi tile floors, to the sunlit courtyards that breathe soul into every corner. The ornate wooden doors, embellished with brass fittings, open into vast halls adorned with Burmese teak ceilings and hand-painted murals. Airy verandas wrap around the structure, cooled by lime-plastered walls and red oxide floors that whisper stories of generations past. The house is thoughtfully segmented — from spacious thinnai to private quarters, kitchens, and store rooms, all set in a perfect Vaastu-compliant grid. A rare blend of royal legacy and functional living, this Karaikudi gem isn't just a home — it's a cultural experience, waiting to be cherished.", doc: "14th of April, 2025"},

        {category: "House", source: "hh1.jpg", name: "Saravanabava Illam", tags: ["3BHK", "Marble Flooring", "Colonial Arches"], description: "This majestic home is a living tribute to South Indian craftsmanship — from its soaring teakwood pillars and intricately carved Athangudi tile floors, to the sunlit courtyards that breathe soul into every corner. The ornate wooden doors, embellished with brass fittings, open into vast halls adorned with Burmese teak ceilings and hand-painted murals. Airy verandas wrap around the structure, cooled by lime-plastered walls and red oxide floors that whisper stories of generations past. The house is thoughtfully segmented — from spacious thinnai to private quarters, kitchens, and store rooms, all set in a perfect Vaastu-compliant grid. A rare blend of royal legacy and functional living, this Karaikudi gem isn't just a home — it's a cultural experience, waiting to be cherished.", doc: "7th of March, 2025"},

        {category: "House", source: "hh3.jpg", name: "Muruga Vilas", tags: ["4BHK", "Courtyard Villa", "Terracotta Roof"], description: "This majestic home is a living tribute to South Indian craftsmanship — from its soaring teakwood pillars and intricately carved Athangudi tile floors, to the sunlit courtyards that breathe soul into every corner. The ornate wooden doors, embellished with brass fittings, open into vast halls adorned with Burmese teak ceilings and hand-painted murals. Airy verandas wrap around the structure, cooled by lime-plastered walls and red oxide floors that whisper stories of generations past. The house is thoughtfully segmented — from spacious thinnai to private quarters, kitchens, and store rooms, all set in a perfect Vaastu-compliant grid. A rare blend of royal legacy and functional living, this Karaikudi gem isn't just a home — it's a cultural experience, waiting to be cherished.", doc: "14th of April, 2025"},

        {category: "House", source: "i1.jpg", name: "Thendral", tags: ["2BHK", "Sea-Facing", "Minimalist Design"], description: "This majestic home is a living tribute to South Indian craftsmanship — from its soaring teakwood pillars and intricately carved Athangudi tile floors, to the sunlit courtyards that breathe soul into every corner. The ornate wooden doors, embellished with brass fittings, open into vast halls adorned with Burmese teak ceilings and hand-painted murals. Airy verandas wrap around the structure, cooled by lime-plastered walls and red oxide floors that whisper stories of generations past. The house is thoughtfully segmented — from spacious thinnai to private quarters, kitchens, and store rooms, all set in a perfect Vaastu-compliant grid. A rare blend of royal legacy and functional living, this Karaikudi gem isn't just a home — it's a cultural experience, waiting to be cherished.", doc: "14th of May, 2025"},

        {category: "House", source: "i2.jpg", name: "Anandha Vilas", tags: ["Studio", "Concrete Finish", "Industrial Chic"], description: "This majestic home is a living tribute to South Indian craftsmanship — from its soaring teakwood pillars and intricately carved Athangudi tile floors, to the sunlit courtyards that breathe soul into every corner. The ornate wooden doors, embellished with brass fittings, open into vast halls adorned with Burmese teak ceilings and hand-painted murals. Airy verandas wrap around the structure, cooled by lime-plastered walls and red oxide floors that whisper stories of generations past. The house is thoughtfully segmented — from spacious thinnai to private quarters, kitchens, and store rooms, all set in a perfect Vaastu-compliant grid. A rare blend of royal legacy and functional living, this Karaikudi gem isn't just a home — it's a cultural experience, waiting to be cherished.", doc: "14th of April, 2025"},

        {category: "Apartment", source: "h2.jpg", name: "Subhyog Bhavan", tags: ["1BHK", "Compact Layout", "Balcony Garden"], description: "This majestic home is a living tribute to South Indian craftsmanship — from its soaring teakwood pillars and intricately carved Athangudi tile floors, to the sunlit courtyards that breathe soul into every corner. The ornate wooden doors, embellished with brass fittings, open into vast halls adorned with Burmese teak ceilings and hand-painted murals. Airy verandas wrap around the structure, cooled by lime-plastered walls and red oxide floors that whisper stories of generations past. The house is thoughtfully segmented — from spacious thinnai to private quarters, kitchens, and store rooms, all set in a perfect Vaastu-compliant grid. A rare blend of royal legacy and functional living, this Karaikudi gem isn't just a home — it's a cultural experience, waiting to be cherished.", doc: "12th of April, 2024"},

        {category: "Apartment", source: "i3.jpg",name: "Ananya Bavan", tags:  ["3.5BHK", "Modern Chettinad", "Handcrafted Doors"], description: "This majestic home is a living tribute to South Indian craftsmanship — from its soaring teakwood pillars and intricately carved Athangudi tile floors, to the sunlit courtyards that breathe soul into every corner. The ornate wooden doors, embellished with brass fittings, open into vast halls adorned with Burmese teak ceilings and hand-painted murals. Airy verandas wrap around the structure, cooled by lime-plastered walls and red oxide floors that whisper stories of generations past. The house is thoughtfully segmented — from spacious thinnai to private quarters, kitchens, and store rooms, all set in a perfect Vaastu-compliant grid. A rare blend of royal legacy and functional living, this Karaikudi gem isn't just a home — it's a cultural experience, waiting to be cherished.", doc: "1th of January, 2025"},

        {category: "Apartment", source: "i4.jpg", name: "Pramodh Bavan", tags: ["2BHK", "Zen Inspired", "Indoor Water Feature"], description: "This majestic home is a living tribute to South Indian craftsmanship — from its soaring teakwood pillars and intricately carved Athangudi tile floors, to the sunlit courtyards that breathe soul into every corner. The ornate wooden doors, embellished with brass fittings, open into vast halls adorned with Burmese teak ceilings and hand-painted murals. Airy verandas wrap around the structure, cooled by lime-plastered walls and red oxide floors that whisper stories of generations past. The house is thoughtfully segmented — from spacious thinnai to private quarters, kitchens, and store rooms, all set in a perfect Vaastu-compliant grid. A rare blend of royal legacy and functional living, this Karaikudi gem isn't just a home — it's a cultural experience, waiting to be cherished.", doc: "27th of December, 2024"},


        {category: "Public Sector", source: "i5.jpg", name: "Kushi Bavan", tags: ["Heritage Home", "Red Oxide Floors", "Stone Pillars"], description: "This majestic home is a living tribute to South Indian craftsmanship — from its soaring teakwood pillars and intricately carved Athangudi tile floors, to the sunlit courtyards that breathe soul into every corner. The ornate wooden doors, embellished with brass fittings, open into vast halls adorned with Burmese teak ceilings and hand-painted murals. Airy verandas wrap around the structure, cooled by lime-plastered walls and red oxide floors that whisper stories of generations past. The house is thoughtfully segmented — from spacious thinnai to private quarters, kitchens, and store rooms, all set in a perfect Vaastu-compliant grid. A rare blend of royal legacy and functional living, this Karaikudi gem isn't just a home — it's a cultural experience, waiting to be cherished.", doc: "07th of October, 2024"},

        {category: "Public Sector", source: "i6.jpg", name: "Pramodh Bavan", tags: ["5BHK", "Vintage Tiles", "Wooden Rafters"], description: "This majestic home is a living tribute to South Indian craftsmanship — from its soaring teakwood pillars and intricately carved Athangudi tile floors, to the sunlit courtyards that breathe soul into every corner. The ornate wooden doors, embellished with brass fittings, open into vast halls adorned with Burmese teak ceilings and hand-painted murals. Airy verandas wrap around the structure, cooled by lime-plastered walls and red oxide floors that whisper stories of generations past. The house is thoughtfully segmented — from spacious thinnai to private quarters, kitchens, and store rooms, all set in a perfect Vaastu-compliant grid. A rare blend of royal legacy and functional living, this Karaikudi gem isn't just a home — it's a cultural experience, waiting to be cherished.", doc: "2nd of May, 2024"},

        {category: "Public Sector", source: "i7.jpg", name: "Gandhi Bavan", tags: ["1BHK", "Compact Layout", "Balcony Garden"], description: "This majestic home is a living tribute to South Indian craftsmanship — from its soaring teakwood pillars and intricately carved Athangudi tile floors, to the sunlit courtyards that breathe soul into every corner. The ornate wooden doors, embellished with brass fittings, open into vast halls adorned with Burmese teak ceilings and hand-painted murals. Airy verandas wrap around the structure, cooled by lime-plastered walls and red oxide floors that whisper stories of generations past. The house is thoughtfully segmented — from spacious thinnai to private quarters, kitchens, and store rooms, all set in a perfect Vaastu-compliant grid. A rare blend of royal legacy and functional living, this Karaikudi gem isn't just a home — it's a cultural experience, waiting to be cherished.", doc: "21th of February, 2024"},
    ]
  return (
    <section className='relative'>
        <Nav/>
        <section className='font-cormorant px-6 md:px-12 mt-24'>
        <div>
                <p className='text-6xl text-gray-400 uppercase'>Projects - {popup.category}</p>
                <section className='w-full gap-3 mt-6 overflow-auto flex'>
                <div className={`${category_state.category === "House"?"scale-105":"" } cursor-pointer relative overlay shadow-md group overflow-hidden min-w-[150px] max-h-[150px]`} onClick={()=>setcategory_state({"category": "House"})}>
                    <img src="hh1.jpg" alt="house" className='object-fill group-hover:scale-105 transition-all'/>
                    <p className='font-cormorant absolute bottom-2 left-2 text-white z-10'>House</p>
                </div>

                <div className={`${category_state.category === "Apartment"?"scale-105":"" } cursor-pointer relative overlay shadow-md group overflow-hidden min-w-[150px] max-h-[150px]`} onClick={()=>setcategory_state({"category": "Apartment"})}>
                    <img src="hh2.jpg" alt="house" className='w-full h-full group-hover:scale-105 transition-all'/>
                    <p className='font-cormorant absolute bottom-2 left-2 text-white z-10'>Apartments</p>
                </div>

                <div className={`${category_state.category === "Government Projects"?"scale-105":"" } cursor-pointer relative overlay shadow-md group overflow-hidden min-w-[150px] max-h-[150px]`} onClick={()=>setcategory_state({"category": "Government Projects"})}>
                    <img src="hh3.jpg" alt="house" className='w-full h-full group-hover:scale-105 transition-all'/>
                    <p className='font-cormorant absolute bottom-2 left-2 text-white z-10'>Government Projects</p>
                </div>

                <div className={`${category_state.category === "Public Sector"?"scale-105":"" } cursor-pointer relative overlay shadow-md group overflow-hidden min-w-[150px] max-h-[150px]`} onClick={()=>setcategory_state({"category": "Public Sector"})}>
                    <img src="hh4.jpg" alt="house" className='w-full h-full group-hover:scale-105 transition-all'/>
                    <p className='font-cormorant absolute bottom-2 left-2 text-white z-10'>Public Sector</p>
                </div>
                </section>
    </div>
        </section>
        <section className='grid grid-cols-1 md:grid-cols-4 auto-rows-[200px] w-full gap-x-2 gap-y-2 mt-12 px-6 md:px-12'>
            {
                    images.map(image =>
                    {
                        if (category_state.category === image.category) {
                            return (
                            <div className='w-full overflow-hidden overlay group cursor-pointer' onClick={()=>{
                                image.open = true
                                setpopup(image)
                            }}>
                                <img src={image.source} key={image.source} className='object-fill min-w-full min-h-full hover:scale-105 transition-all group-hover:scale-105'/>
                                <div className='absolute bottom-4 left-4 rounded-full z-10 text-white font-cormorant'>
                                <p className='font-bold text-lg mt-2'>{image.name}</p>
                                <p className='text-gray-50 text-sm'>A beautifully crafted 2-BHK villa.</p>
                                </div>
                            </div>   
                            )
                        }
                    }
                    )
            }
        </section>

         {/* Popup */}
         {
            popup.open?
        <section className='fixed top-0 left-0 bg-white/70 w-full h-[100vh] z-40 p-3 md:p-12 font-cormorant flex justify-center items-center'>
            <div className='p-6 rounded-xl ring-1 ring-gray-200 bg-white max-h-full shadow-md flex flex-wrap gap-y-6 overflow-y-scroll md:overflow-y-hidden relative'>
                  {/* closure */}
                  <div 
                    className='absolute top-3 right-3 w-[50px] h-[50px] bg-white rounded-full p-6 shadow-xl z-40 flex justify-center items-center flex-col cursor-pointer hover:scale-95'
                    onClick={()=>setpopup({open: false})}
                    >
                        <span className='block w-[40px] h-[1px] bg-black rounded-full rotate-45'></span>
                        <span className='block w-[40px] h-[1px] bg-black rounded-full -rotate-45'></span>
                    </div>
                <div className='md:max-w-[50%] overflow-hidden rounded-xl flex justify-center'>
                    <div className='max-w-full overflow-hidden max-h-[500px] flex justify-center items-center'>
                        <img src={popup.source} className='max-w-[90%] rounded-xl ring-1 ring-gray-300 shadow-md'/>
                    </div>
                </div>
                <div className='md:max-w-[50%] flex flex-col items-start justify-center items gap-y-1 min-h-full'>

                    <p className='uppercase text-gray-500'>{popup.category}</p>
                    <p className='font-bold text-2xl'>{popup.name}</p>
                    <div className='flex gap-2 items-center'>
                        {popup.tags.forEach(element => {
                            return (
                                <>
                                <p className='font-serif text-gray-800 text-xs'>{element}</p>
                                <span className='w-[3px] h-[3px] rounded-full bg-gray-900'></span>
                                </>
                            )   
                        })
                        }
                    </div>
                    <div>
                    <p className='text-lg text-justify leading-6 text-gray-700 mt-2'>
                        {popup.description}
                    </p>
                    <p className='mt-4'><b>Gracefully Completed On:</b> {popup.doc}</p>
                    </div>
                </div>
            </div>
        </section>
        :<></>}
    </section>

  )
}

export default Projects