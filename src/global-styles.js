import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  
  :root{
    /*  
    Colocar depois como font-size: 1.4rem
    Fontes: 1px = 0.75pt / 16px = 12pt  
    */
    font-size: 62.5%;

   --color-header-nav: #F5E2D2;
   --color-footer: #027DC5; 
   --color-body: #C4C4C4; 
   --color-container: #FFFFFF;
   --color-login-box: #b6c8d83b; 
   --color-login-box-hover: #ffd48588; 
   --color-login-link: #19068B;
   --color-nav-estagio: #C4C4C4;
   --color-font-nav-estagio: #414A50;
   --color-nav-estagio-selected: #0C90C8;
   --color-font-nav-estagio-selected: #FFFFFF;
   --color-textfield: #F3F3F3;
   --color-confirm: #28B850; 
   --color-treebar-background: #D8E0E4;
   --color-treebar-font: #2267B8;
   --color-background-title:  #62A6CD;
   --color-border-table: #676363;
   --color-title-table: #FFFFFF;
   --color-scroll-bar: #8f8d8d;
   --color-profile-container: #EBEBEB;
   --color-profile-user-icon: #C4C4C4;
  }

  html,body, #root{
    width: 100%;
    height: 100%;
  }

  *, button, input, textarea{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    outline: none;
    border: 0;
    font-family: 'Roboto','Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }

  button, a, i, img, svg{
    cursor: pointer;
  }

  ul{
    list-style: none;
  }

  body{
    background-color: var(--color-body)
  }

  a {
    text-decoration: none;
  }

  button{
    cursor: pointer;
    border: 0;
    transition: .4s;
  }
  
  button:hover, a:hover, svg:hover{
    filter: brightness(80%);
  }

  ::-webkit-scrollbar{
    width: 10px;
    background: transparent; 
  }

  ::-webkit-scrollbar-thumb{
    border-radius: 8px;
    background: var(--color-scroll-bar);
    transition: .4s;
  }
`

export default GlobalStyle;