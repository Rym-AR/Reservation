// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
// import {useState,Popover} from "react";
// const App = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const handleClick = (e) => {
//     const target = e.target;

//     // Obtenez l'élément de la barre de navigation
//     const element = document.getElementById(target.dataset.href);

//     // Défilez jusqu'à l'élément de la barre de navigation
//     element.scrollIntoView({
//       behavior: "smooth",
//     });
//   };

//   return (
//     <div>
//       <nav >
//         <a href="#home" data-href="home">Accueil</a>
//         <a href="#about" data-href="about">À propos</a>
//         <a href="#contact" data-href="contact">Contact</a>
//         <a href="#">
//           Nombre
//           <Popover isOpen={isOpen} onClose={() => setIsOpen(false)}>
//             <ul>
//               <li data-href="uno">Uno</li>
//               <li data-href="dos">Dos</li>
//             </ul>
//           </Popover>
//         </a>
//       </nav>

//       <div id="home">
//         <h1>Accueil</h1>
//       </div>
//       <div id="about">
//         <h1>À propos</h1>
//       </div>
//       <div id="contact">
//         <h1>Contact</h1>
//       </div>
//       <div id="uno">
//         <h1>Uno</h1>
//       </div>
//       <div id="dos">
//         <h1>dos</h1>
//       </div>
//     </div>
//   );
// };
// export default App;

// import { useState, Popover } from "react";
//---------------------
// import React, { useState, useEffect } from "react";


// const App = () => {
//   const [isHovered, setIsHovered] = useState(false);
//   const handleClick = (e) => {
//     const target = e.target;

//     // Obtenez l'élément de la barre de navigation
//     const element = document.getElementById(target.dataset.href);

//     // Défilez jusqu'à l'élément de la barre de navigation
//     element.scrollIntoView({
//       behavior: "smooth",
//     });
//   };
//   const handleMouseEnter = () => {
//     setIsHovered(true);
//   };

//   const handleMouseLeave = () => {
//     setIsHovered(false);
//   };
//   return (
//     <div>
//       <nav>
//         <a href="#home" data-href="home">Accueil</a>
//         <a href="#about" data-href="about">À propos</a>
//         <a href="#contact" data-href="contact">Contact</a>
//         <a href="#">Nombre </a>
//         {isHovered && (
//         <ul>
//           <li href="#uno"data-href="uno"onClick={handleMouseEnter}>Uno</li>
//               <li href="#dos" data-href="dos">Dos</li>
//         </ul>
//       )}
//       </nav>

//       <div id="home">
//         <h1>Accueil</h1>
//       </div>
//       <div id="about">
//         <h1>À propos</h1>
//       </div>
//       <div id="contact">
//         <h1>Contact</h1>
//       </div>
//       <div id="uno">
//         <h1>Uno</h1>
//       </div>
//       <div id="dos">
//         <h1>dos</h1>
//       </div>
//     </div>
//   );
// };

// export default App;
//-----------------
import React, { useState, useEffect } from "react";
import "./medicale.css";
const App = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  
      const [divs, setDivs] = useState([
        {
          id: 1,
          className: "un",
          photo: {
            className: "photo",
            content: <h3>photo</h3>,
          },
          bottom: {
            className: "bottom",
            content: (
              <>
                <h3>Medecin 1</h3>
                <p>Prix: 1500DA</p>
              </>
            ),
          },
        },
        // 2
        {
          id: 2,
          className: "un",
          photo: {
            className: "photo",
            content: <h3>photo</h3>,
          },
          bottom: {
            className: "bottom",
            content: (
              <>
                <h3>Medecin 2</h3>
                <p>Prix: 1500DA</p>
              </>
            ),
          },
        },
        // 3
        {
          id: 3,
          className: "un",
          photo: {
            className: "photo",
            content: <h3>photo</h3>,
          },
          bottom: {
            className: "bottom",
            content: (
              <>
                <h3>Medecin 3</h3>
                <p>Prix: 1500DA</p>
              </>
            ),
          },
        },
        // 4
        {
          id: 4,
          className: "un",
          photo: {
            className: "photo",
            content: <h3>photo</h3>,
          },
          bottom: {
            className: "bottom",
            content: (
              <>
                <h3>Medecin 4</h3>
                <p>Prix: 1500DA</p>
              </>
            ),
          },
        },
        //5
        {
          id: 5,
          className: "un",
          photo: {
            className: "photo",
            content: <h3>photo</h3>,
          },
          bottom: {
            className: "bottom",
            content: (
              <>
                <h3>Medecin 5</h3>
                <p>Prix: 1500DA</p>
              </>
            ),
          },
        },
        //6
        {
          id: 6,
          className: "un",
          photo: {
            className: "photo",
            content: <h3>photo</h3>,
          },
          bottom: {
            className: "bottom",
            content: (
              <>
                <h3>Medecin 6</h3>
                <p>Prix: 1500DA</p>
              </>
            ),
          },
        },
        //7
        {
          id: 7,
          className: "un",
          photo: {
            className: "photo",
            content: <h3>photo</h3>,
          },
          bottom: {
            className: "bottom",
            content: (
              <>
                <h3>Medecin 7</h3>
                <p>Prix: 1500DA</p>
              </>
            ),
          },
        },
        //8
        {
          id: 8,
          className: "un",
          photo: {
            className: "photo",
            content: <h3>photo</h3>,
          },
          bottom: {
            className: "bottom",
            content: (
              <>
                <h3>Medecin 8</h3>
                <p>Prix: 1500DA</p>
              </>
            ),
          },
        }
  ]);

  // const handleLeftClick = () => {
  //   const currentDivIndex = divs.findIndex((div) => div.id === selectedDivId);
  //   const newDivIndex = currentDivIndex - 1;
  //   if (newDivIndex < 0) {
  //     newDivIndex = divs.length - 1;
  //   }
  //   selectedDivId = divs[newDivIndex].id;
  // };

  // const handleRightClick = () => {
  //   const currentDivIndex = divs.findIndex((div) => div.id === selectedDivId);
  //   const newDivIndex = currentDivIndex + 1;
  //   if (newDivIndex >= divs.length) {
  //     newDivIndex = 0;
  //   }
  //   selectedDivId = divs[newDivIndex].id;
  // };

  // const selectedDivId = divs[0].id;

  // const handleClick = () => {
  //   // Ajoute un nouveau div
  //   const newDiv = {
  //     id: Math.random(),
  //     text: "Nouveau div",
  //   };
  //   setDivs([...divs, newDiv]);

  //   // Supprime le premier div
  //   const firstDiv = divs.shift();
  //   setDivs(divs);

  //   // Défile les divs à gauche
  //   const divContainer = document.getElementById("consultation");
  //   divContainer.scrollLeft += divContainer.clientWidth;
  // };

  // const handleScrollLeft = () => {
  //   const divContainer = document.getElementById("consultation");
  //   divContainer.scrollLeft -= divContainer.clientWidth;

  //   // Faites défiler jusqu'au dernier div si nécessaire
  //   if (divContainer.scrollLeft === 0) {
  //     divContainer.scrollTo(divContainer.scrollWidth, 0);
  //   }
  // };

  const handleScrollLeft = () => {
    const divContainer = document.getElementById("consultation");
    divContainer.scrollLeft += divContainer.clientWidth; // Défilement vers la gauche
  
    // Faites défiler jusqu'au début si nécessaire
    if (divContainer.scrollLeft >= divContainer.scrollWidth - divContainer.clientWidth) {
      divContainer.scrollTo(0, 0);
    }
  };

  return (
    <div>
      
    <nav className="navbar">
       <div className="logo"><h3>Logo</h3></div>
       <div className="navv">  
         <a href="#home" className="home">Accueil</a>
         <a className="nous" onClick={handleMouseEnter} >consultation</a>
         <a href="#contact">Contact</a>
      </div>
      {isHovered && (
        <ul className="dropdown">
          <li><a href="#uno" data-href="uno" >medicale</a></li>
          <li><a href="#dos" data-href="dos" onMouseLeave={handleMouseLeave}>paramedicale</a></li>
          {/* <li><a href="/#tres" data-href="/fgh">FGH</a></li> */}
        </ul>
      )}
    </nav>

     <div id="home">
              <h1>Accueil</h1>
            </div>
      <div id="nous">
             <h1 >consultation</h1>
           </div>
      <div id="contact">
             <h1>contact</h1>
      </div>
      <div id="uno">
             {/* <h1>medicale</h1> */}
             <h1 className="title">Consultation médicale à domicile</h1>
        <div className="consultation" id="consultation">
        
          <button id="btng" >G</button>
          {divs.slice(0, 5).map((div) => (
        // <div key={div.id} id={div.id}>{div.text}</div>
        <div key={div.id} className="un">
        {/* Afficher le contenu de la photo */}
        {div.photo.content}
        {/* Afficher le contenu du bottom */}
        {div.bottom.content}
      </div>
      ))}
         {/* <div className="un">
           <div className="photo">  
               <h3>photo</h3>
           </div>
           <div className="bottom">
               <h3>Medecin generaliste</h3>
               <p>Prix: 1500DA</p>
           </div>
        </div>
        
        <div className="un">
           <div className="photo"> 
               <h3>photo</h3> 
           </div>
           <div className="bottom">
               <h3>Medecin generaliste</h3>
               <p>Prix: 1500DA</p>
           </div>
        </div>
        
        <div className="un">
           <div className="photo"> 
               <h3>photo</h3> 
           </div>
           <div className="bottom">
               <h3>Medecin generaliste</h3>
               <p>Prix: 1500DA</p>
           </div>
        </div>
        
        <div className="un">
           <div className="photo"> 
               <h3>photo</h3> 
           </div>
           <div className="bottom">
             <h3>Medecin generaliste</h3>
             <p>Prix: 1500DA</p>
           </div>
        </div>
        
        <div className="un">
           <div className="photo"> 
               <h3>photo</h3> 
           </div>
           <div className="bottom">
           <h3>Medecin generaliste</h3>
               <p>Prix: 1500DA</p>
           </div>
        </div>
        
        <div className="un">
           <div className="photo"> 
               <h3>photo</h3> 
           </div>
           <div className="bottom">
           <h3>Medecin generaliste</h3>
               <p>Prix: 1500DA</p>
           </div>
        </div>
       
        <div className="un">
           <div className="photo"> 
               <h3>photo</h3> 
           </div>
           <div className="bottom">
           <h3>Medecin generaliste</h3>
               <p>Prix: 1500DA</p>
           </div>
        </div>
       
        <div className="un">
           <div className="photo"> 
               <h3>photo</h3> 
           </div>
           <div className="bottom">
           <h3>Medecin generaliste</h3>
               <p>Prix: 1500DA</p>
           </div> 
      </div>*/}

        <button id="btnd" onClick={ handleScrollLeft}>D</button>
       </div> 
      </div>
      
      <div id="dos">
             <h1>paramedicale</h1>
           </div>
  </div>     
  );
};

export default App;
