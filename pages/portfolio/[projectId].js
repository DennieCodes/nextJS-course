import React from "react";
import { useRouter } from "next/router";

function PortfolioProjectPage() {
  const router = useRouter();

  // console.log(router.pathname);
  console.log(router.query);

  return (
    <div>
      <h1>The Portfolio Project Page</h1>
      <p>This route is called when /portfolio/id is reached</p>
    </div>
  );
}

export default PortfolioProjectPage;
