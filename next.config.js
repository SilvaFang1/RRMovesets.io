/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        // hostname: "bzgzlhdowumbsdyxqlso.supabase.co",
        hostname: "pqnhbsrkbqxljmqyrcye.supabase.co",
        pathname: "/storage/**",
      },
    ],
  },
};

module.exports = nextConfig;
