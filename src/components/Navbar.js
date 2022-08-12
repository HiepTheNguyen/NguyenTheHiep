
import { Link, useLocation } from "react-router-dom"

import { useState } from "react"
import Sidebar from "./Sidebar"

import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "../Image/hiep1.png"

export default function Navbar(){
    const [showSidebar, setShowSidebar] = useState(false)
    const location = useLocation()
    const links = [
        {
            name: "Home",
            path: "/"
            
        },
        {
            name: "About Us" ,
            path: "/AboutUs",
           icon: faChevronDown
        },
        {
            name: "Our Model",
            path: "/Our Model"
           
        },
        {
            name: "Buying Cover",
            path: "/BuyingCover"
        },
        {
            name: "FAQs",
            path: "/FAQs"
        },
        {
            name: "EN",
            path: "/EN",
            icon: faChevronDown
        },
        {
            name: "CONTACT",
            path: "/CONTACT"
        }

    ]

    function closeSidebar(){
        setShowSidebar(false)
    }
    return (
        <>
            <div className="navbar container">
                
                <Link to="/" className="logo"><img src ={Image} class="navbar-img"/><h3>HILLRIDGE</h3></Link>
                <div className="nav-links">
                    { links.map(link => (
                        <Link className={location.pathname === link.path ? "active" : ""} to={link.path} key={link.name}>{link.name}
                        <FontAwesomeIcon icon={link.icon} />
                        </Link>
                    )) }
                </div>
                <div onClick={() => setShowSidebar(true)} className={showSidebar ? "sidebar-btn active" : "sidebar-btn"}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </div>
            { showSidebar && <Sidebar close={closeSidebar} links={links} /> }
        </>
    )
}
