import "bootstrap-icons/font/bootstrap-icons.css";
import React, { useState } from "react";

function App() {
  const [toggleSidebar, setTogglesidebar] = useState(false);
  const [categoryMenuOpen, setCategoryMenuOpen] = useState(false);
  const [postsMenuOpen, setPostsMenuOpen] = useState(false);
  // Add similar state variables for other dropdown menus as needed

  const handleToggleSidebar = () => {
    setTogglesidebar(!toggleSidebar);
  };
  const handleCategoryMenuToggle = () => {
    setCategoryMenuOpen(!categoryMenuOpen);
  };

  const handlePostsMenuToggle = () => {
    setPostsMenuOpen(!postsMenuOpen);
  };

  return (
    <div className={`sidebar ${toggleSidebar ? "open" : "close"}`}>
      <div className="sidebar close">
        <div className="logo-details">
          <i class="bi bi-list" onClick={handleToggleSidebar}></i>
          <img src="/image.png" className="logo_name" alt="logo"></img>
          <i class="bi bi-x" onClick={handleToggleSidebar}></i>
        </div>

        <ul className="nav-links">
          <li>
            <a href="#">
              <i class="bi bi-grid"></i>
              <span>Dashboard</span>
            </a>
            <ul className="sub-menu blank">
              <li>
                <a className="link_name" href="#">
                  Dashboard
                </a>
              </li>
            </ul>
          </li>
          <li>
            <div className="iocn-link" onClick={handleCategoryMenuToggle}>
              <a href="#">
                <i class="bi bi-collection-play-fill"></i>
                <span>Category</span>
              </a>
              <i
                className={`bi ${
                  categoryMenuOpen ? "bi-caret-up-fill" : "bi-caret-down-fill"
                }`}
              ></i>
            </div>
            <ul className={`sub-menu ${categoryMenuOpen ? "showMenu" : ""}`}>
              <li>
                <a className="link_name" href="#">
                  Category
                </a>
              </li>
              <li>
                <a href="#">HTML & CSS</a>
              </li>
              <li>
                <a href="#"> Javascript</a>
              </li>
              <li>
                <a href="#">PHP & React</a>
              </li>
            </ul>
          </li>
          <li>
            <div className="iocn-link">
              <a href="#">
                <i class="bi bi-journals"></i>
                <span>Posts</span>
              </a>
              <i class="bi bi-caret-down-fill"></i>
            </div>
            <ul className="sub-menu">
              <li>
                <a className="link_name" href="#">
                  Posts
                </a>
              </li>
              <li>
                <a href="#">Web Design</a>
              </li>
              <li>
                <a href="#"> Form Design</a>
              </li>
              <li>
                <a href="#">Card Design</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">
              <i class="bi bi-pie-chart-fill"></i>
              <span>Analytics</span>
            </a>
            <ul className="sub-menu blank">
              <li>
                <a className="link_name" href="#">
                  Analytics
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">
              <i class="bi bi-graph-up"></i>
              <span>Chart</span>
            </a>
            <ul className="sub-menu blank">
              <li>
                <a className="link_name" href="#">
                  Chart
                </a>
              </li>
            </ul>
          </li>
          <li>
            <div className="iocn-link">
              <a href="#">
                <i class="bi bi-plug"></i>
                <span>Plugins</span>
              </a>
              <i class="bi bi-caret-down-fill"></i>
            </div>
            <ul className="sub-menu">
              <li>
                <a className="link_name" href="#">
                  Plugins
                </a>
              </li>
              <li>
                <a href="#">UI Face</a>
              </li>
              <li>
                <a href="#"> Pigments</a>
              </li>
              <li>
                <a href="#">Box Icons</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">
              <i class="bi bi-compass"></i>
              <span>Explore</span>
            </a>
            <ul className="sub-menu blank">
              <li>
                <a className="link_name" href="#">
                  Chart
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">
              <i class="bi bi-hourglass-split"></i>
              <span>History</span>
            </a>
            <ul className="sub-menu blank">
              <li>
                <a className="link_name" href="#">
                  History
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">
              <i class="bi bi-gear"></i>
              <span>Settings</span>
            </a>
            <ul className="sub-menu blank">
              <li>
                <a className="link_name" href="#">
                  Settings
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <div className={`footer ${toggleSidebar ? "open" : "close"}`}>
          <div className="logout">
            <a href="#">
              <i className="bi bi-box-arrow-left"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
