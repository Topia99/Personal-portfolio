import React from 'react'
import './Footer.css'


const Footer = () =>{
    return (
        <div>
            <div className="footer">
                <hr />
                <div className="footer-bottom">
                    <p className="footer-bottom-left">© 2024 Jason Zeng. All rights reserved.</p>
                    <div className="footer-bottom-right">
                        <p>Term of Services</p>
                        <p>Privacy Policy</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;