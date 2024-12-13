import Image from "next/image";
import React from "react";
import Logo from "@/public/logo.png";
import { Button } from "./ui/button";
import { Clapperboard, Menu, TvMinimalPlay } from "lucide-react";
import UserLogin from "./user-login";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import SearchBar from "./search-bar";
import AuthContextProvider from "@/context/AuthContext";

const Header = () => {
  return (
    <header className="max-w-[1920px] flex items-center justify-between gap-4 mx-auto border-b px-6 py-2">
      {/* Logo */}
      <Image
        className="h-10 w-36 lg:w-52 lg:h-14 xl:h-16 object-fill"
        alt="Logo"
        src={Logo}
        priority
      />

      {/* Search and Actions */}
      <div className="flex gap-4 items-center">
        {/* Search Bar */}
        <SearchBar />

        {/* Navigation Buttons for Desktop */}
        <div className="hidden md:flex gap-4">
          <Button
            variant="link"
            className="flex items-center gap-2 font-bold"
            aria-label="View Subscriptions"
          >
            <TvMinimalPlay />
            Subscriptions
          </Button>
          <Button
            variant="link"
            className="flex items-center gap-2 font-bold"
            aria-label="View My Courses"
          >
            <Clapperboard />
            My Courses
          </Button>
        </div>

        {/* Dropdown Menu for Mobile */}
        <div className="flex md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger aria-label="Open Navigation Menu">
              <Menu />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <TvMinimalPlay />
                <span className="ml-2">Subscriptions</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Clapperboard />
                <span className="ml-2">My Courses</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* User Login */}
        <AuthContextProvider>
          <UserLogin />
        </AuthContextProvider>
      </div>
    </header>
  );
};

export default Header;
