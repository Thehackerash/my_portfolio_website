import  React from 'react';

class Navbar extends React.Component{
    render(){
        return <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      Hiii! 
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            about me
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" aria-disabled="true">
            contact
          </a>
        </li>
       
      </ul>
    </div>
  </div>
</nav>


        </div>;
    }
}
export default Navbar;