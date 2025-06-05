import { AiOutlineGithub, AiFillYoutube, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { Link } from 'react-router-dom'

import './menu.css'

export default function Menu() {
  return (
    <div className='menu'>
      <a href="https://www.linkedin.com/in/poulainpatricia" className="social">
        <AiFillLinkedin size={24} color="FFF" /></a>
      <a href="https://github.com/englishwithpatricia007" className='social'>
        <AiOutlineGithub size={24} color="FFF" /></a>
      <a href="https://www.youtube.com/@englishwithpatricia2730" className='social'>
        <AiFillYoutube size={24} color="FFF" /></a>
      <a href="https://www.instagram.com/englishwithpatricia007/" className='social'>
        <AiFillInstagram size={24} color="FFF" /></a>

      <Link className="menu-item" to={"/links"}>Meus Links</Link>
    </div>
  )
}