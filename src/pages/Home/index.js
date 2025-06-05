import { FiLink } from "react-icons/fi";
import "./home.css"
import Menu from '../../components/Menu'
import { useState } from "react";
import LinkItem from "../../components/LinkItem";
import { Link } from "react-router-dom";

export default function Home() {

  const [link, setLink] = useState('');

  const [showModal, setShowModal] = useState(false);


  function handleShortLink() {
    setShowModal(true)
  }

  return (
    <div className="container-home">

      <div className="logo">
        <img src="logo.png" alt="Logo do projeto" />
        <h1>SujeitoLink</h1>
        <span> Cole seu link para encurtar 👇</span>
      </div>

      <div className="area-input">
        <div>
          <FiLink size={24} color="#FFF" />
          <input
            value={link}
            onChange={e => setLink(e.target.value)}
            placeholder="Cole seu link aqui... " />
        </div>

        <button
          onClick={handleShortLink}>Encurtar link</button>
      </div>

      <Menu />


      {showModal && (
        <LinkItem
          closeModal={() => setShowModal(false)}
        />
      )}
    </div>
  )
}