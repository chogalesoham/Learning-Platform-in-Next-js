import Header from "@/components/header";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <>
      <Toaster position="top-right" />
      <Header />
    </>
  );
}
