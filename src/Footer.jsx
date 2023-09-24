import React from "react";
var date = new Date()
var year = date.getFullYear()

console.log(date)

function Footer (){
    return(
        <div>
         {"\u00A9"} {year} {'\u0040'}Invincible Tech
        </div>
    )
}

export default Footer;