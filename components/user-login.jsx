"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import GoogleIcon from "@/public/google-icon.png";
import { useAuth } from "@/context/AuthContext";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import userLogo from "@/public/user.webp";
import { Clapperboard, Mail, TvMinimalPlay } from "lucide-react";
import toast from "react-hot-toast";

const UserLogin = () => {
  const [loginUserData, setLoginUserData] = useState({
    email: "",
    password: "",
  });
  const [signUpUserData, setSignUpUserData] = useState({
    email: "",
    password: "",
  });

  const {
    user,
    handleSignInWithGoogle,
    handleLogout,
    isLoading,
    signUp,
    logIn,
  } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await logIn(loginUserData?.email, loginUserData?.password);
    } catch (error) {
      toast.error("Invalid credentials please check");
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await signUp(signUpUserData?.email, signUpUserData?.password);
      console.log(signUpUserData);
      console.log("User created");
    } catch (error) {
      toast.error("Invalid credentials please check");
    }
  };

  if (user) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger aria-label="Open Navigation Menu">
          <Avatar>
            <AvatarImage
              className="w-10 h-10 object-cover"
              src={user?.photoURL || userLogo.src}
              alt="User Profile"
            />
            <AvatarFallback>U</AvatarFallback> {/* User fallback */}
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="p-4">
          <DropdownMenuItem className="flex items-center gap-2 py-2">
            <Mail />
            <span>{user?.email}</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center gap-2 py-2">
            <TvMinimalPlay />
            <span>Subscriptions</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center gap-2 py-2">
            <Clapperboard />
            <span>My Courses</span>
          </DropdownMenuItem>
          <Button
            onClick={handleLogout}
            variant="destructive"
            className="w-full"
          >
            Log Out
          </Button>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return (
    <Dialog className="max-w-[90%]">
      <DialogTrigger asChild>
        <Button aria-label="Open Login Dialog" className=" p-2">
          Sign Up
        </Button>
      </DialogTrigger>
      <DialogContent>
        <Tabs defaultValue="login">
          <TabsList className="flex w-full py-6 px-4">
            <TabsTrigger className="w-[45%] py-2" value="login">
              Login
            </TabsTrigger>
            <TabsTrigger className="w-[45%] py-2" value="sign-up">
              Sign-Up {/* Corrected the typo */}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="login">
            <DialogHeader className="flex items-center mx-10">
              <DialogTitle className="my-2">Login With</DialogTitle>
            </DialogHeader>
            <DialogDescription>
              <form onSubmit={handleLogin} className="flex flex-col gap-2">
                <div className="grid w-full items-center gap-1.5 py-2">
                  <Input
                    required
                    className="w-full py-6 px-3"
                    type="email"
                    id="email"
                    value={loginUserData.email}
                    placeholder="Enter Your Email"
                    onChange={(e) =>
                      setLoginUserData({
                        ...loginUserData,
                        email: e.target.value,
                      })
                    }
                  />
                </div>

                <div className="grid w-full items-center gap-1.5 py-2">
                  <Input
                    required
                    className="w-full py-6 px-3"
                    type="password"
                    id="password"
                    value={loginUserData.password}
                    placeholder="Enter Your Password"
                    onChange={(e) =>
                      setLoginUserData({
                        ...loginUserData,
                        password: e.target.value,
                      })
                    }
                  />
                </div>
                <Button type="submit" className="w-full py-6">
                  Submit
                </Button>
                <hr />
              </form>
            </DialogDescription>
          </TabsContent>

          <TabsContent value="sign-up">
            <DialogHeader className="flex items-center">
              <DialogTitle className="my-2">Sign Up With</DialogTitle>{" "}
              {/* Corrected the typo */}
            </DialogHeader>
            <DialogDescription>
              <form onSubmit={handleSignUp} className="flex flex-col gap-2">
                <div className="grid w-full items-center gap-1.5 py-2">
                  <Input
                    className="w-full py-6 px-3"
                    type="text"
                    id="username"
                    placeholder="Enter Your Username"
                  />
                </div>
                <div className="grid w-full items-center gap-1.5 py-2">
                  <Input
                    required
                    className="w-full py-6 px-3"
                    type="email"
                    id="email"
                    value={signUpUserData.email}
                    placeholder="Enter Your Email"
                    onChange={(e) =>
                      setSignUpUserData({
                        ...signUpUserData,
                        email: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="grid w-full items-center gap-1.5 py-2">
                  <Input
                    required
                    className="w-full py-6 px-3"
                    type="password"
                    id="password"
                    value={signUpUserData.password}
                    placeholder="Enter Your Password"
                    onChange={(e) =>
                      setSignUpUserData({
                        ...signUpUserData,
                        password: e.target.value,
                      })
                    }
                  />
                </div>
                <Button type="submit" className="w-full py-6">
                  Submit
                </Button>
              </form>
            </DialogDescription>
          </TabsContent>
        </Tabs>
        <div className="flex items-center justify-center">
          <hr className="flex-grow border-t border-gray-300" />
          <span className="mx-4 text-gray-500">or</span>
          <hr className="flex-grow border-t border-gray-300" />
        </div>
        <Button
          onClick={handleSignInWithGoogle}
          variant="ghost"
          disabled={isLoading}
          className={`w-full py-6 bg-[#4382F3] text-white ${
            isLoading ? "cursor-not-allowed" : "cursor-pointer"
          }`}
        >
          <img
            className="h-[35px] bg-gray-100 p-1 rounded-sm"
            src={GoogleIcon.src}
            alt="GoogleIcon"
          />
          Continue With Google
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default UserLogin;
