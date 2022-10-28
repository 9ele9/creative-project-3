import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light da-bar">
        <Link to="/" class="navbar-brand"><p class="kuller">Pretty☆Pies</p></Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item" >
              <Link to="/" class="nav-link"><p class="kuller">Home</p></Link>
            </li>
          <li class="nav-item">
            <Link to="/products" class="nav-link"><p class="kuller">Products</p></Link>
          </li>
          <li class="nav-item">
            <Link to="/contact" class="nav-link"><p class="kuller">Contact</p></Link>
          </li>
        </ul>
        </div>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;