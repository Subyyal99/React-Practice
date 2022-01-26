import { useLocation } from "react-router-dom";

const Header = ({onShow, Showform}) => {
 console.log('in header',Showform)
 const location = useLocation();
  return (
  <header  className="header">
    <h1 style={headingStyle}>Task Manager</h1>
    {location.pathname === '/' && ( <button className="btn" 
    onClick={onShow}>{Showform ? 'Close' : 'Add'}</button>)}

  </header>
  )
};

const headingStyle = {
    color: 'green',
    marginLeft: '2%',

}

export default Header;
