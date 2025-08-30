import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",  // ⬅️ WAJIB supaya hasil build jadi static export
  basePath: "/ilham-portfolio",   // ⬅️ harus sama persis dengan nama repo
  assetPrefix: "/ilham-portfolio/",
  images: {
    unoptimized: true,   // ⬅️ WAJIB untuk GitHub Pages
  },
};

export default nextConfig;
