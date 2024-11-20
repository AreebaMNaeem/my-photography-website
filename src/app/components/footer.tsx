import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
    return (
        <section className="footer">
            <div className="box-container">
                <div className="box">
                    <h3>EBA Clicks! ❤️</h3>
                    <p>
                        Thank you for visiting EBA Clicks, where every moment is transformed into art. Connect with us on social media to stay updated with our latest work. <br />
                        <br />
                        Keep Smiling and Capturing Moments 📸. Chat with us live for inquiries and bookings!
                    </p>
                </div>

                <div className="box">
                    <h3>Check our work</h3>
                    <Link href="/">
                        <i className="fas fa-chevron-circle-right"></i> Home
                    </Link>
                    <Link href="/portraits">
                        <i className="fas fa-chevron-circle-right"></i> Portrait
                    </Link>
                    <Link href="/nature">
                        <i className="fas fa-chevron-circle-right"></i> Nature & Wildlife
                    </Link>
                    <Link href="/events">
                        <i className="fas fa-chevron-circle-right"></i> Events & Weddings
                    </Link>
                    <Link href="/product">
                        <i className="fas fa-chevron-circle-right"></i> Product Photography
                    </Link>
                </div>

                <div className="box">
                    <h3>For Booking</h3>
                    <p>
                        <i className="fas fa-phone"></i> +92 349-130-2247
                    </p>
                    <p>
                        <i className="fas fa-envelope"></i> areebanaeem350@gmail.com
                    </p>
                    <p>
                        <i className="fas fa-map-marked-alt"></i> Karachi | Pakistan
                    </p>
                    <div className="share">
                        <a
                            className="facebook"
                            aria-label="Facebook"
                            href="https://www.facebook.com/profile.php?id=100075464850301"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a
                            className="instagram"
                            aria-label="Instagram"
                            href="https://www.instagram.com/areebaa.naeem/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a
                            className="linkedin"
                            aria-label="LinkedIn"
                            href="https://www.linkedin.com/in/areeba-naeem-bse168/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a
                            className="github"
                            aria-label="GitHub"
                            href="https://github.com/AreebaMNaeem"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fab fa-github"></i>
                        </a>
                    </div>
                </div>
            </div>

            <h1 className="credit">
                Designed & Developed <i className="fa fa-heart pulse"></i> by <a href="#">Areeba Naeem</a>
            </h1>
        </section>
    );
};

export default Footer;
