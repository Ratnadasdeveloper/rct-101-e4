import React from "react";
import {useDispatch,useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {logoutAPI} from '../..store/auth.actons';


const Navbar = () => {
   const {isAuth}=useSelector(state=>state.auth)
   const dispatch =useDispatch();

   const handLogin=()=>{
     dispatch(logout());
   }
  return (
    <div data-cy="navbar" style={{padding :'10px',display:"flex",gap:'20px',justifyContent:'space-between'}}>
      <div>
        {/* TODO: Use Link instead of anchor tag. */}
        <Link to ="/">Home</Link>
      </div>
      <div>
        <div data-cy="navbar-cart-items-count">
          <Link to ="/cart">cart</Link>
        </div>
        <button data-cy="navbar-login-logout-button" onClink={handLogin}>{isAuth ? 'Logout':'Login'}>login</button>
      </div>
    </div>
  );
};

export default Navbar;