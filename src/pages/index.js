import * as React from "react";
import { useState } from "react";
import { Script } from "gatsby";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Accordion from "../components/accordion";

import "preline/preline";
import { IStaticMethods } from "preline/preline";
window.HSStaticMethods = IStaticMethods;

const IndexPage = () => {
  const location = useLocation();

  useEffect(() => {
    window.HSStaticMethods.autoInit();
  }, [location.pathname]);

  const [list, setList] = useState(["apple", "orange", "mango", "tomato"]);
  return (
    <>
      <div class="h-screen bg-red-300">
        <Accordion></Accordion>
      </div>
      {/* <Script src="./node_modules/preline/dist/preline.js" /> */}
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
