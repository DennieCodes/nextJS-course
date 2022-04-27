import React from "react";
import Link from "next/link";

function ClientsPage() {
  const clients = [
    { id: "max", name: "Maximillian" },
    { id: "manu", name: "Manuel" },
  ];

  return (
    <div>
      <h1>The Clients Page</h1>
      <ul>
        {clients.map((client) => {
          return (
            // Two different ways to use Link

            // <li key={client.id}>
            //   <Link href={`/clients/${client.id}`}>{client.name}</Link>
            // </li>

            // Alternative usage
            <li key={client.id}>
              <Link
                href={{
                  pathname: "/clients/[id]",
                  query: { id: client.id },
                }}
              >
                {client.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ClientsPage;
