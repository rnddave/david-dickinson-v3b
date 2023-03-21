import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
import './navbar.styles.scss';

const Navigation = () => {
  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <div className='logo'><span>David</span>Dickinson</div>
        </Link>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;