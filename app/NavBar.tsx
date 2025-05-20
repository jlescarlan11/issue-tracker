"use client";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { LuBug } from "react-icons/lu";

const NavBar = () => {
  const currentPath = usePathname();
  console.log(currentPath);

  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];

  return (
    <div className="border-b shadow-sm mb-4">
      <nav className="constainer max-w-7xl mx-auto h-12 flex items-center space-x-4 ">
        <Link href="/" legacyBehavior>
          <LuBug />
        </Link>
        <ul className="flex space-x-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={classNames({
                "text-zinc-900": link.href === currentPath,
                "text-zinc-500": link.href !== currentPath,
                "hover:text-zinc-800 transition-colors": true,
              })}
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
