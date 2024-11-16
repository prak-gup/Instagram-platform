/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  swcMinify: false, // Disable SWC minification to avoid the build error
};

module.exports = nextConfig;