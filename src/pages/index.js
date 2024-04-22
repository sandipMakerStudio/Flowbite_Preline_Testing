import * as React from "react";
import { useState } from "react";

import { Script } from "gatsby";
import Accordion from "../components/Accordion";

const IndexPage = () => {
  const [list, setList] = useState(["apple", "orange", "mango", "tomato"]);
  return (
    <>
      <div class="h-screen bg-red-300">
        <Accordion></Accordion>
      </div>
      <Script src="../../node_modules/preline/dist/preline.js" />
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
