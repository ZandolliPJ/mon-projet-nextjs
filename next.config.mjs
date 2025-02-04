/** @type {import('next').NextConfig} */
const nextConfig = {};
// next.config.js
const withNetlify = require('next-on-netlify');
module.exports = withNetlify();
export default nextConfig;
