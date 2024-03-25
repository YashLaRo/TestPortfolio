import React from 'react';

export function NavBar() {
    return (              
        // <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        //     <a className="navbar-brand mx-5" href="#">𝒴𝒶𝓈𝒽 𝒩𝒶𝓇𝓋𝑒𝓀𝒶𝓇</a>
        //     {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        //         <span className="navbar-toggler-icon"></span>
        //     </button> */}

        //     <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
        //         <ul className="navbar-nav text- "> 
        //             <li className="nav-item  mx-4">
        //                 <a className="nav-link" href="Home">About </a>
        //             </li>
        //             <li className="nav-item mx-4">
        //                 <a className="nav-link" href="#">Project</a>
        //             </li>                    
        //             <li className="nav-item mx-4">
        //                 <a className="nav-link " href="#">Technology</a>
        //             </li>
        //             <li className="nav-item mx-4">
        //                 <a className="nav-link " href="MyInfo">About me</a>
        //             </li>
        //         </ul>              
        //     </div>
        // </nav>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand mx-5" href="#">𝒴𝒶𝓈𝒽 𝒩𝒶𝓇𝓋𝑒𝓀𝒶𝓇</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div id="navbarSupportedContent" className="navbar-collapse " >
            <ul className="navbar-nav ">
              <li className="nav-item  mx-4">
                <a className="nav-link" href="Home">About </a>
              </li>
              <li className="nav-item mx-4">
                <a className="nav-link" href="#projects">Projects</a>
              </li>
              <li className="nav-item mx-4">
                <a className="nav-link " href="#Skills">Technology</a>
              </li>
              <li className="nav-item mx-4">
                <a className="nav-link" href="#aboutme">About me</a>
              </li>
              <li className="nav-item mx-4">
                <a className="nav-link" href="#contactus">Contact me</a>
              </li> 
            </ul>
          </div>
        </nav>
    );
}