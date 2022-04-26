import React from "react";
import { useRouter } from "next/router";

function BlogPage() {
  const router = useRouter();

  console.log(router.query);

  return (
    <div>
      <h1>The Blog Posts</h1>
      <p>
        This route uses a spread [...slug] as it's path/filename. router.query
        will give us an array named slug with whatever parameters are passed.
      </p>
    </div>
  );
}

export default BlogPage;
