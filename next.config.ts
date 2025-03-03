import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets-global.website-files.com",
        port: "443",
        pathname: "/61ed56ae9da9fd7e0ef0a967/:imageId",
      }
    ],
  }
  /* config options here */
};

export default nextConfig;
