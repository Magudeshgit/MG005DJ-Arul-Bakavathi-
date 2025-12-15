import React from 'react'
import { useNavigate } from 'react-router'
const Ctabutton = (props) => {
  const navi = useNavigate()
  function handleReroute(where)
  {
    navi(where, {replace: true})
    location.reload()

  }
  return (
    <a href={props.where}>
    <button className={`w-full md:w-auto px-12 py-3 group uppercase flex justify-center font-medium cursor-pointer ${!props.onlyBorder?'bg-black text-white':"text-black"} border-1 border-black rounded-full font-cormorant gap-2 tracking-wider font-light mt-6`}>
              {props.prompt}
              <img src="arrowcross.svg" alt="" className={`transition-all ${props.onlyBorder?"invert rotate-45 group-hover:translate-x-0.5":"group-hover:rotate-45"}`} />
    </button>
    </a>
  )
}

export default Ctabutton