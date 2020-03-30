import React from 'react';
import './footer.styles.scss';
import { ReactComponent as Logo } from "../../assets/magnet.svg";
import { Link } from "react-router-dom";


const Footer = () => {

return(
<div className="Footer">

<ul className ='Corp'>
<p> <strong>Corporate Info</strong></p>
<li> <Link href="#">Careers at Urban-Apparel </Link></li>
<li> <Link href="#">About Urban-Apparel </Link></li>
<li> <Link href="#">Corporate Goverance</Link></li>
</ul>

<ul className ='Help'>
<p> <strong>Help</strong></p>
<li> <Link href="#">Customer Service </Link></li>
<li> <Link href="#">Find a Store</Link></li>
<li> <Link href="#">Legal & privacy</Link></li>
</ul>


<div className ="crl">
<Logo className ="logof" />
<p className="cr"> &copy; 2020 Urban-Apparel. All rights Reserved </p>
</div>


</div>

);

}

export default Footer;