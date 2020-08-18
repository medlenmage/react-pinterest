import React from 'react';
import Auth from '../Auth/Auth';

class MyNavbar extends React.Component {
  render() {
    return (
      <div id="pinterest-navbar">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="index.html">Navbar</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a className="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
              </li>
            </ul>
          </div>
          <Auth />
        </nav>
      </div>
    );
  }
}

export default MyNavbar;
