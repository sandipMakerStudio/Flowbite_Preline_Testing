import * as React from "react";
import { useState } from "react";

import { useEffect } from "react";

import { useLocation } from "@reach/router";

import Accordion from "../components/Accordion";
import Navbar from "../components/Navbar";
import Input_Field from "../components/Input_Field";

import "preline/preline";
import { HSStaticMethods } from "preline/preline";

console.log(HSStaticMethods);

window.HSStaticMethods = HSStaticMethods;

const IndexPage = () => {
  const location = useLocation();

  useEffect(() => {
    window.HSStaticMethods.autoInit();
  }, [location.pathname]);

  const [list, setList] = useState(["apple", "orange", "mango", "tomato"]);
  return (
    <div className="h-screen bg-slate-100">
      <Navbar></Navbar>
      <Input_Field />
      <div className="mt-24"></div>
      <Accordion></Accordion>
    </div>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
