import React from "react";
import { useRouter } from "next/router";

function SelectedClientProjectPage() {
  const router = useRouter();

  console.log(router.query);
  return (
    <div>
      <h1>Selected Clients Projects Page</h1>
    </div>
  );
}

export default SelectedClientProjectPage;
