import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle`
 :root{
    --primary-clr: HSL(202, 20%, 92%);
    --secondary-clr: HSL(0, 0%, 3%);
    --accent-clr: HSL(42, 100%, 50%);
    --ff:'Spartan', sans-serif;
    --fs-500:5rem;
    --fs-400:3rem;
    --fs-300:2rem;
    --fs-200:1.125rem;
    --fs-100:0.75rem;
    --fw-400:800; 
    --fw-300:600; 
    --fw-200:400; 
    --fw-100:200;
    --letter-spacing:1em;
    --line-height:2em;
    --spacing1:0.5rem; 
    --spacing2:1rem;
    --spacing3:1.5rem;
    --spacing4:2rem;
    --raduis:0.5rem;
    --transition: all 0.3ms ease-in-out;
  

  @font-face {
	font-family: "Spartan";
	font-style: normal;
	font-weight: 200;
	src: url("/fonts/Spartan-ExtraLight.ttf") format("ttf");
	font-display: swap;
}
@font-face {
	font-family: "Spartan";
	font-style: normal;
	font-weight: 400;
	src: url("/fonts/Spartan-Regular.ttf") format("ttf");
	font-display: swap;
}
@font-face {
	font-family: "Spartan";
	font-style: normal;
	font-weight: 600;
	src: url("/fonts/Spartan-SemiBold.ttf") format("ttf");
	font-display: swap;
}
@font-face {
	font-family: "Spartan ";
	font-style: normal;
	font-weight: 800;
	src: url("/fonts/Spartan-ExtraBold.ttf") format("ttf");
	font-display: swap;
}

 ${reset}
 ${normalize}

 body{
    background-color:var(--secondary-clr) ;
    color:var(--primary-clr);
    font-family: var(--ff);
    font-size: var(--fs-200);
    font-weight: var(--fw-200);
 }

 h1{
font-size: var(--fs-400) ;
font-weight: var(--fw-300);
/* font-family: 'Spartan-SemiBold' */
 }

 h2{font-size: var(--fs-300) }
 p{}
 a{
    text-decoration: none;
 }
`;

export default GlobalStyle;
