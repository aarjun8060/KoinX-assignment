"use client";
import Image from "next/image";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { AlignJustify } from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useScrollTop } from "@/lib/use-scroll-top";

const NavBar = () => {
  const scroll = useScrollTop()
  return (
    <Card className={`w-full flex fixed justify-center items-center h-16 ${scroll && "shadow-md !top-0 z-50"}`}>
      <div className="w-11/12 flex justify-between items-center">
        <Image src={"/logo.png"} alt="logo" width={100} height={200} />

        <div className="hidden md:flex gap-4 font-semibold items-center ">
          <h3>Crypto Taxes</h3>
          <h3>Free Tools</h3>
          <h3>Resource Center</h3>

          <Button variant="primary">Get Started</Button>
        </div>
        <div className="block md:hidden">
          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="outline">
                <AlignJustify />
              </Button>
            </DrawerTrigger>
            <DrawerContent>
              <div className="flex flex-col gap-4 font-semibold items-center pb-5">
                <h3>Crypto Taxes</h3>
                <h3>Free Tools</h3>
                <h3>Resource Center</h3>

                <Button variant="primary">Get Started</Button>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </Card>
  );
};

export default NavBar;
