import React, { useState } from "react";
import "./Sidebar.css"; // Import your CSS file

// Sidebar component
export function Sidebar() {
    const [isSidebarClosed, setSidebarClosed] = useState(false);
    const [isLightMode, setLightMode] = useState(false);
    const toggleSidebar = () => {
        setSidebarClosed(!isSidebarClosed);
    };
    const toggleMode = () => {
        setLightMode(!isLightMode);
    };
    const navigateTo = (page) => {
        window.location.href = page; // Simple page navigation
    };
    return (
        <div className={`sidebar ${isSidebarClosed ? "close" : ""} ${isLightMode ? "light" : ""}`}>
            <header>
                <div className="image-text">
                    <span className="image">
                        <img src="../images/algo-vision-high-resolution-logo.png" alt="logo" />
                    </span>
                    <div className="text header-text">
                        <span className="name">Algo Vision</span>
                    </div>
                </div>
                <i className="bx bx-chevron-right toggle" onClick={toggleSidebar}></i>
            </header>

            <ul className="menu-bar">
                <div className="menu">
                    <li className="search-box">
                        <i className="bx bx-search-alt icon"></i>
                        <input type="search" placeholder="Search" />
                    </li>

                    <li>
                        <a href="#" onClick={() => navigateTo("../src/landing_page.html")}>
                            <i className="bx bx-home icon"></i>
                            <span className="text nav-text">Home</span>
                        </a>
                    </li>

                    {/* Divide and Conquer */}
                    <li className="dropdown">
                        <a href="#" className="dropbtn">
                            <i className="bx bx-bar-chart-square icon"></i>
                            <span className="text nav-text">Divide and Conquer</span>
                        </a>
                        <div className="dropdown-content">
                            <a href="./page.html">Bucket Sort</a>
                            <a href="#">Quick Sort</a>
                            <a href="#">Merge Sort</a>
                        </div>
                    </li>

                    {/* Dynamic Programming */}
                    <li className="dropdown">
                        <a href="#" className="dropbtn">
                            <i className="bx bxs-component icon"></i>
                            <span className="text nav-text">Dynamic Programming</span>
                        </a>
                        <div className="dropdown-content">
                            <a href="#">Fibonacci Sequence</a>
                            <a href="#">Nth Factorial</a>
                            <a href="#">Longest Palindrome</a>
                        </div>
                    </li>

                    {/* Backtracking */}
                    <li className="dropdown">
                        <a href="#" className="dropbtn">
                            <i className="bx bx-minus-back icon"></i>
                            <span className="text nav-text">Backtracking</span>
                        </a>
                        <div className="dropdown-content">
                            <a href="#">Sums of Subsets</a>
                            <a href="#">Tug of War</a>
                        </div>
                    </li>

                    {/* Branch */}
                    <li className="dropdown">
                        <a href="#" className="dropbtn">
                            <i className="bx bx-code-alt icon"></i>
                            <span className="text nav-text">Branch</span>
                        </a>
                        <div className="dropdown-content">
                            <a href="#">Binary Search</a>
                            <a href="#">Binary Search Tree</a>
                            <a href="#">Topological Sort</a>
                        </div>
                    </li>

                    {/* Simple Recursive */}
                    <li className="dropdown">
                        <a href="#" className="dropbtn">
                            <i className="bx script-math icon"></i>
                            <span className="text nav-text">Simple Recursive</span>
                        </a>
                        <div className="dropdown-content">
                            <a href="#">Euclidean GCD</a>
                            <a href="#">LCS</a>
                        </div>
                    </li>

                    <li>
                        <a href="https://github.com/ariffikrie/Algo-Vision" target="_blank" rel="noreferrer">
                            <i className="bx bxl-github icon"></i>
                            <span className="text nav-text">Github</span>
                        </a>
                    </li>
                </div>

                {/* Bottom section */}
                <div className="bottom-context">
                    <li>
                        <a href="#" onClick={() => navigateTo("../src/credit.html")}>
                            <i className="bx bxl-linkedin icon"></i>
                            <span className="text nav-text">Credit</span>
                        </a>
                    </li>

                    <li className="mode" onClick={toggleMode}>
                        <div className="moon-sun">
                            <i className={`bx bx-moon icon moon ${isLightMode ? "hidden" : ""}`}></i>
                            <i className={`bx bx-sun icon sun ${!isLightMode ? "hidden" : ""}`}></i>
                        </div>
                        <span className="mode-text text">{isLightMode ? "Dark Mode" : "Light Mode"}</span>
                        <div className="toggle-switch">
                            <span className="switch"></span>
                        </div>
                    </li>
                </div>
            </ul>
        </div>
    );
}

// const Sidebar = () => {
//   const [isSidebarClosed, setSidebarClosed] = useState(false);
//   const [isLightMode, setLightMode] = useState(false);

//   const toggleSidebar = () => {
//     setSidebarClosed(!isSidebarClosed);
//   };

//   const toggleMode = () => {
//     setLightMode(!isLightMode);
//   };

//   const navigateTo = (page) => {
//     window.location.href = page; // Simple page navigation
//   };

//   return (
//     <div className={`sidebar ${isSidebarClosed ? "close" : ""} ${isLightMode ? "light" : ""}`}>
//       <header>
//         <div className="image-text">
//           <span className="image">
//             <img src="../images/algo-vision-high-resolution-logo.png" alt="logo" />
//           </span>
//           <div className="text header-text">
//             <span className="name">Algo Vision</span>
//           </div>
//         </div>
//         <i className="bx bx-chevron-right toggle" onClick={toggleSidebar}></i>
//       </header>

//       <ul className="menu-bar">
//         <div className="menu">
//           <li className="search-box">
//             <i className="bx bx-search-alt icon"></i>
//             <input type="search" placeholder="Search" />
//           </li>

//           <li>
//             <a href="#" onClick={() => navigateTo("../src/landing_page.html")}>
//               <i className="bx bx-home icon"></i>
//               <span className="text nav-text">Home</span>
//             </a>
//           </li>

//           {/* Divide and Conquer */}
//           <li className="dropdown">
//             <a href="#" className="dropbtn">
//               <i className="bx bx-bar-chart-square icon"></i>
//               <span className="text nav-text">Divide and Conquer</span>
//             </a>
//             <div className="dropdown-content">
//               <a href="./page.html">Bucket Sort</a>
//               <a href="#">Quick Sort</a>
//               <a href="#">Merge Sort</a>
//             </div>
//           </li>

//           {/* Dynamic Programming */}
//           <li className="dropdown">
//             <a href="#" className="dropbtn">
//               <i className="bx bxs-component icon"></i>
//               <span className="text nav-text">Dynamic Programming</span>
//             </a>
//             <div className="dropdown-content">
//               <a href="#">Fibonacci Sequence</a>
//               <a href="#">Nth Factorial</a>
//               <a href="#">Longest Palindrome</a>
//             </div>
//           </li>

//           {/* Backtracking */}
//           <li className="dropdown">
//             <a href="#" className="dropbtn">
//               <i className="bx bx-minus-back icon"></i>
//               <span className="text nav-text">Backtracking</span>
//             </a>
//             <div className="dropdown-content">
//               <a href="#">Sums of Subsets</a>
//               <a href="#">Tug of War</a>
//             </div>
//           </li>

//           {/* Branch */}
//           <li className="dropdown">
//             <a href="#" className="dropbtn">
//               <i className="bx bx-code-alt icon"></i>
//               <span className="text nav-text">Branch</span>
//             </a>
//             <div className="dropdown-content">
//               <a href="#">Binary Search</a>
//               <a href="#">Binary Search Tree</a>
//               <a href="#">Topological Sort</a>
//             </div>
//           </li>

//           {/* Simple Recursive */}
//           <li className="dropdown">
//             <a href="#" className="dropbtn">
//               <i className="bx script-math icon"></i>
//               <span className="text nav-text">Simple Recursive</span>
//             </a>
//             <div className="dropdown-content">
//               <a href="#">Euclidean GCD</a>
//               <a href="#">LCS</a>
//             </div>
//           </li>

//           <li>
//             <a href="https://github.com/ariffikrie/Algo-Vision" target="_blank" rel="noreferrer">
//               <i className="bx bxl-github icon"></i>
//               <span className="text nav-text">Github</span>
//             </a>
//           </li>
//         </div>

//         {/* Bottom section */}
//         <div className="bottom-context">
//           <li>
//             <a href="#" onClick={() => navigateTo("../src/credit.html")}>
//               <i className="bx bxl-linkedin icon"></i>
//               <span className="text nav-text">Credit</span>
//             </a>
//           </li>

//           <li className="mode" onClick={toggleMode}>
//             <div className="moon-sun">
//               <i className={`bx bx-moon icon moon ${isLightMode ? "hidden" : ""}`}></i>
//               <i className={`bx bx-sun icon sun ${!isLightMode ? "hidden" : ""}`}></i>
//             </div>
//             <span className="mode-text text">{isLightMode ? "Dark Mode" : "Light Mode"}</span>
//             <div className="toggle-switch">
//               <span className="switch"></span>
//             </div>
//           </li>
//         </div>
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;
