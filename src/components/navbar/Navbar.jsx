import React from 'react';
import './navbar.scss';

const Navbar = () => {
 
  return (
    
    <div className='navbar__container'>

        <div className="navbar__container-left">
          <span className='navbar-name'>Title</span>
        </div>

        <div className='navbar__container-menu'>
              <p><a href="#topArticles">Latest Articles</a></p>
              <p><a href="#allArticles">All Articles</a></p>
        </div>

        <div className="navbar__container-right">
          <button type='button'className='connect-button'>connect</button>
      </div>

    </div> 
  )
}

export default Navbar