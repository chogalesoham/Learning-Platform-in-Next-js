"use client";

import React from "react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import GoogleIcon from "@/public/google-icon.png";

const UserLogin = () => {
  return (
    <Dialog className=" max-w-[90%]">
      <DialogTrigger>
        <Button>Sign Up</Button>
      </DialogTrigger>
      <DialogContent>
        <Tabs defaultValue="login">
          <TabsList className=" flex w-full py-6 px-4">
            <TabsTrigger className=" w-[45%] py-2" value="login">
              Login
            </TabsTrigger>
            <TabsTrigger className=" w-[45%] py-2" value="sing-up">
              Sing-Up
            </TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <DialogHeader className=" flex items-center mx-10">
              <DialogTitle className=" my-2">Login With</DialogTitle>
            </DialogHeader>
            <DialogDescription>
              <form className=" flex flex-col gap-2">
                <div className="grid w-full  items-center gap-1.5 py-2 ">
                  <Input
                    className=" w-full py-6 px-3"
                    type="email"
                    id="email"
                    placeholder="Enter Your Email"
                  />
                </div>
                <div className="grid w-full  items-center gap-1.5 py-2">
                  <Input
                    className=" w-full py-6 px-3"
                    type="password"
                    id="password"
                    placeholder="Enter Your Password"
                  />
                </div>
                <Button className="w-full py-6">Submit</Button>
                <hr />
              </form>
            </DialogDescription>
          </TabsContent>
          <TabsContent value="sing-up">
            <DialogHeader className=" flex items-center">
              <DialogTitle className=" my-2">Sing Up With</DialogTitle>
            </DialogHeader>
            <DialogDescription>
              <form className=" flex flex-col gap-2">
                <div className="grid w-full  items-center gap-1.5 py-2 ">
                  <Input
                    className=" w-full py-6 px-3"
                    type="text"
                    id="username"
                    placeholder="Enter Your Username"
                  />
                </div>
                <div className="grid w-full  items-center gap-1.5 py-2 ">
                  <Input
                    className=" w-full py-6 px-3"
                    type="email"
                    id="email"
                    placeholder="Enter Your Email"
                  />
                </div>
                <div className="grid w-full  items-center gap-1.5 py-2">
                  <Input
                    className=" w-full py-6 px-3"
                    type="password"
                    id="password"
                    placeholder="Enter Your Password"
                  />
                </div>
                <Button className="w-full py-6">Submit</Button>
              </form>
            </DialogDescription>
          </TabsContent>
        </Tabs>
        <div className="flex items-center justify-center">
          <hr className="flex-grow border-t border-gray-300" />
          <span className="mx-4 text-gray-500">or</span>
          <hr className="flex-grow border-t border-gray-300" />
        </div>

        <Button variant="ghost" className="w-full py-6 bg-[#4382F3] text-white">
          <img
            className=" h-[35px]  bg-gray-100 p-1 rounded-sm"
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
