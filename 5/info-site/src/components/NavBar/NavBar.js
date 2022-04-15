import logo from '../../assets/logo.svg'
import './NavBar.css'

export default function NavBar() {
    return <div className='header'>
        <div className='logo'>
            <img src={logo} alt='logo' height='25px' />
            <span className='logoText'>ReactFacts</span>
        </div> 
        <h3>React Course - Project 1</h3>
    </div>
}