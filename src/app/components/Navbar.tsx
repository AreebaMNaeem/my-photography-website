import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="navigation-bar">
      <nav className="flex justify-between items-center px-8 py-4 ">
        {/* Website Name */}
        <div className="title text-2xl font-bold text-black">
          <Link href="/">EBA CLICKS! ❤️</Link>
        </div>


        {/* Navigation Links */}
        <ul className="flex space-x-8">
          <li>
            <Link href="/" className="hover:text-black">
              Home
            </Link>
          </li>
          <li>
            <Link href="/portraits" className="hover:text-black">
              Portrait
            </Link>
          </li>
          <li>
            <Link href="/nature" className="hover:text-black">
              Nature & Wildlife
            </Link>
          </li>
          <li>
            <Link href="/events" className="hover:text-black">
              Events & Weddings
            </Link>
          </li>
          <li>
            <Link href="/product" className="hover:text-black">
              Product Photography
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
