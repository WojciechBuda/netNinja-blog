import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Blog o gotowaniu</h1>
      <div className="links">
        <Link to="/" style= {{
          color: 'black',
          backgroundColor: 'white',
          borderRadius: '8px'
        }}>Start</Link>

        <Link to="/create" style={{
          color: 'black',
          backgroundColor: 'white',
          borderRadius: '8px'
        }}>Stwórz nowy blog</Link>

        {/* <a href="/create" style={{
          color: 'white',
          backgroundColor: '#5e35f1',
          borderRadius: '8px'
        }}>Kontakt</a> */}
      </div>
    </nav>
  )
}

export default Navbar;