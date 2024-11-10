import Link from 'next/link';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import "../css-files/footer.css"

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        
        <div className="footer-icons">
          <Link href="https://www.facebook.com/share/1PYiH5ggsp/" className="footer-icon" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </Link>
          <Link href="https://www.instagram.com/rafihasiddiqui/profilecard/?igsh=MTMyeWRiaGE2NDZzag==" className="footer-icon" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </Link>
          <Link href="https://www.linkedin.com/in/rafiha-siddiqui-8829152bb?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="footer-icon" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </Link>
        </div>
        <p className="footer-text">&copy; All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
