/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    unoptimized: true,
    domains: ['localhost', 'holidaydeals.vercel.app'],
  },
  output: 'export',
  experimental: {
    payload: {
      enabled: true,
      serverURL: process.env.PAYLOAD_PUBLIC_SITE_URL,
    },
  },
}

export default nextConfig
