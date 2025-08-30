import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {unoptimized: true}
  ,
  basePath: "/ilham-portfolio",
  assetPrefix: "/ilham-portfolio"
};

export default nextConfig;
