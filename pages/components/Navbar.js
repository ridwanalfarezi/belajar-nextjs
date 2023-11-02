import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/profil">Profil</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
