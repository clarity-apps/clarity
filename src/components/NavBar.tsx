function NavBar() {
  return (
    <nav className="nav">
      <div className="navbar-left">
        <a href="/">Clarity</a>
        <a href="/practice">Practice</a>
        <a href="/about">About</a>
      </div>
      <div className="navbar-right">
        <a href="/potd">POTD</a>
        <a href="/profile">Profile</a>
      </div>
    </nav>
  );
}

export default NavBar;
