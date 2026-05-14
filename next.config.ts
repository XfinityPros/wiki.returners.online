import type { NextConfig } from "next";
import nextra from "nextra";

// Set up Nextra with its configuration
const withNextra = nextra({
  // ... Add Nextra-specific options here
  contentDirBasePath: "/",
});

const nextConfig: NextConfig = {
  turbopack: {
    resolveAlias: {
      "next-mdx-import-source-file":
        "./src/components/mdx-components/index.tsx",
    },
  },
};

export default withNextra(nextConfig);
