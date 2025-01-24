import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const IndexPage = () => (
  <>
    <main className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Home Page</h1>
      <p className="mb-4 font-light">Welcome to your new Gatsby site.</p>
      <StaticImage
        src="../images/gatsby-astronaut.avif"
        alt="Gatsby astronaut"
        placeholder="blurred"
        layout="fixed"
        width={200}
        height={200}
        className="mb-4"
      />
      <p>
        <Link to="/page-2/" className="text-blue-500 hover:underline">
          Go to page 2
        </Link>
      </p>
    </main>
  </>
);

export default IndexPage;

export const Head = () => <title>Home Page</title>;
