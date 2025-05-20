import Link from "next/link";
import React from "react";
import { LuBug } from "react-icons/lu";

const NavBar = () => {
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];

  return (
    <div className="border-b shadow-sm mb-4">
      <nav className="constainer max-w-7xl mx-auto h-12 flex items-center space-x-4 ">
        <Link href="/">
          <LuBug />
        </Link>
        <ul className="flex space-x-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-zinc-500 hover:text-zinc-800 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
