import React from "react";

function Footer(){
    const curentYear=new Date().getFullYear;
    return(
        <footer>Copyright ⓒ {curentYear}</footer>
    );
}
export default Footer;