import React from "react";
import { Search, SearchIcon } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

// Reusable Search Input Component
const SearchInput = () => (
  <div className="w-full max-w-[500px] border border-gray-400 rounded-lg flex items-center px-4 py-2 gap-2 sm:max-w-[400px] md:max-w-[500px]">
    <Search className="text-gray-700" />
    <input
      className="border-none outline-none w-full text-sm sm:text-base"
      type="text"
      placeholder="Search for Anything"
      aria-label="Search Input"
    />
  </div>
);

// SearchBar Component
const SearchBar = () => {
  return (
    <>
      {/* Desktop Search Bar */}
      <div className="hidden md:flex">
        <SearchInput />
      </div>

      {/* Mobile Search Bar */}
      <div className="flex md:hidden">
        <Sheet>
          <SheetTrigger aria-label="Open Search">
            <SearchIcon />
          </SheetTrigger>
          <SheetContent
            side="top"
            className="w-full flex items-center justify-center"
          >
            <SearchInput />
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
};

export default SearchBar;
