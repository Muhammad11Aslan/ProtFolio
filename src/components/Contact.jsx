import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
    return (
        <>
            <div className="container my-4" id='contact'>
                <h1>Contact Me</h1>
                <div className="contact-icon" data-aos="zoom-in-up"
                    data-aos-duration="1000">
                    <a href="" target="_blank" className="item">
                        <FaInstagram className='icon' />
                    </a>
                    <a href="" target="_blank" className="item">
                        <CiFacebook className='icon' />
                    </a>
                    <a href="" target="_blank" className="item">
                        <CiLinkedin className='icon' />
                    </a>
                    <a href="" target="_blank" className="item">
                        <FaSquareXTwitter className='icon' />
                    </a>
                    <a href="" target="_blank" className="item">
                        <FaGithubSquare className='icon' />
                    </a>
                    <a href="" target="_blank" className="item">
                        <SiGmail className='icon' />
                    </a>
                </div>
            </div>
        </>
    )
}

export default Contact;
