function NavBar() {
  return (
    <nav className="nav-root">
      <div className="navbar">
        <div className="navbar-left">
          <a className="nav-item" href="/">
            Clarity
          </a>
          <a className="nav-item" href="/practice">
            Practice
          </a>
          <a className="nav-item" href="/about">
            About
          </a>
        </div>
        <div className="navbar-right">
          <a className="nav-item" href="/potd">
            POTD
          </a>
          <a className="nav-item" href="/profile">
            Profile
          </a>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
