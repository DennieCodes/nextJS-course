import React from "react";
import { useRouter } from "next/router";

function ClientsProjectsPage() {
  const router = useRouter();

  console.log(router.query);

  function loadProjectHandler() {
    router.push("/clients/max/projectA");
  }

  return (
    <div>
      <h1>The Projects of a Given Client</h1>
      <p>An Example of how to navigate programmatically</p>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
}

export default ClientsProjectsPage;
