import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      "cdn.bunny.net",
      "storage.bunnycdn.com",
      "lh3.googleusercontent.com",
    ],
  },
};

export default nextConfig;
