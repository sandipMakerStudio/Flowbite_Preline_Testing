import * as React from "react";
import { Script } from "gatsby";

import Accordian from "../components/Accordian";
import Navbar from "../components/Navbar";
import Input_Field from "../components/Input_Field";
import Footer from "../components/Footer";

const IndexPage = () => {
  return (
    <>
      <main class="mx-auto">
        <Navbar></Navbar>
        <div class="mt-24"></div>
        <Input_Field></Input_Field>
        <div class="mt-24"></div>
        <Accordian></Accordian>
        <div class="mt-24"></div>
        <Footer></Footer>
      </main>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js" />
    </>
  );
};

export function Head() {
  return (
    <>
      <title>Example page</title>
      {/* Data block script */}
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.css"
        rel="stylesheet"
      />
    </>
  );
}

export default IndexPage;
