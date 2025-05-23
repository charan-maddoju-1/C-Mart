import { useNavigate } from "react-router-dom"
import Cookies from "js-cookie"
import {Link} from 'react-router-dom'

import "./index.css"

const Header =()=>{

    const navigate=useNavigate();
    const onClickLogOut=()=>{
        Cookies.remove('jwt_token')
        navigate("/login", { replace: true });
    }

    return (
        <nav className='nav-header'>
            <div className='nav-content'>
                <Link to='/'>
                    <img 
                        src="https://img.freepik.com/free-vector/fashion-history-flat-text-with-big-letters-little-human-characters-dressed-clothes-different-times-vector-illustration_98292-8840.jpg?t=st=1745936196~exp=1745939796~hmac=2daff3fd7fd908632c1746a21de1900ecebe152819c238a82f4be79f5a3a718b&w=1060"
                        className='website-logo'
                        alt='Website Logo'
                    />
                </Link>
                

                <ul className='nav-menu'>
                    <Link to='/' className='nav-link'>
                        <li>Home</li>
                    </Link>
                    <Link to='/products' className='nav-link'>
                        <li>Products</li>
                    </Link>
                    <Link to='/cart' className='nav-link'>
                        <li>Cart</li>
                    </Link>
                </ul>

                <button type='button' className='logout-desktop-btn' onClick={onClickLogOut}>Logout</button>
                <button type='button' className='logout-mobile-btn' onClick={onClickLogOut}>
                    <img 
                        className="logout-icon"
                        src="https://cdn-icons-png.flaticon.com/128/5509/5509651.png"
                        alt="Logout"
                    />
                </button>
            </div>
        </nav>

    )
}

export default Header