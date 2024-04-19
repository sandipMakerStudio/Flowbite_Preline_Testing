import * as React from "react";
import { useState } from "react";

const IndexPage = () => {
  const [list, setList] = useState(["apple", "orange", "mango", "tomato"]);
  return (
    <div class="h-screen bg-red-300">
      <p class="text-4xl font-bold text-red-500 p-12">
        This is a test to learn about gatsby
      </p>
    </div>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
